{
  description = "pistol dev shell — Node stays here, not global";

  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0";

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "aarch64-darwin"
        "x86_64-darwin"
        "aarch64-linux"
        "x86_64-linux"
      ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = forAllSystems (
        pkgs: {
          default = pkgs.mkShell {
            packages = with pkgs; [
              # examples/run.mjs, wiki/lint.mjs, explorer/build.mjs (plain Node, no npm project)
              nodejs_22
              # explorer/build.mjs currently shells out to `npx --yes esbuild`; PATH esbuild is the offline path
              esbuild
            ];
            shellHook = ''
              echo "pistol dev shell: node $(node -v)  esbuild $(esbuild --version)"
            '';
          };
        }
      );
    };
}
