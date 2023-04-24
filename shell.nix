with import <nixpkgs> { };

stdenv.mkDerivation {
  name = "Profile";

  buildInputs = [ deno];
  shellHook = ''
    # poetry shell
  '';

}

