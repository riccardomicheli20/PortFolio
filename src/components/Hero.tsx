import { useState } from "react";
import { CustomCursor } from "./CustomCursor";
import { Logo } from "./Logo";
import { HeaderNav } from "./HeaderNav";
import { ViewButton } from "./ViewButton";
import { VideoBackground } from "./VideoBackground";
import { WhiteOverlay } from "./WhiteOverlay";
import { Footer } from "./Footer";
import { Loader } from "./Loader";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <VideoBackground onLoaded={() => setLoaded(true)} />
      <CustomCursor />
      <Logo />
      <HeaderNav />
      <ViewButton />
      <WhiteOverlay />
      <Footer />
      <Loader visible={!loaded} />
    </>
  );
}
