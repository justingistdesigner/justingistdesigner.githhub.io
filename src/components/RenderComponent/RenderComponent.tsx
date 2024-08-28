 import { useCallback, useEffect, useMemo, useRef } from "react";
import backgroundImage from "../../assets/Background.avif";
import { GlobalThemes, useWindowDimensions } from "../../ThemeManager";
import "../../css/generics.scss";
import "../../css/styles.scss";
import "./RenderComponent.scss";

import { useLocation, useNavigate } from "react-router-dom";
import ResumePage from "../../pages/ResumePage/ResumePage";
import Stars from "../../pages/ResumePage/Stars";
import ContactPage from "../../pages/ContactPage/ContactPage";
import GalleryPage from "../../pages/GalleryPage/GalleryPage";
import TopNav from "../TopNav/TopNav";

const RenderComponent = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const url = location?.pathname?.toString().slice(1, location?.pathname?.length);
  const dimensions = useWindowDimensions();

  const routes = useMemo(() => new Map<string, any>([
    [GlobalThemes.Resume, <ResumePage />],
    [GlobalThemes.Contact, <ContactPage />],
    [GlobalThemes.Gallery, <GalleryPage />]
    // [GlobalThemes.Sales, <SalesTheme />],
    // [GlobalThemes.Enterprise, <EnterpriseTheme />],
    // [GlobalThemes.Spooky, <SpookyTheme />],
    // [GlobalThemes.Test, <TestPage />],
    // [GlobalThemes.BlackRed, <BlackRed />],
    // [GlobalThemes.Music, <MusicPage />],
    // [GlobalThemes.Fragments, <FragmentsPage />],
    // [GlobalThemes.List, <NotePage />],
    // [GlobalThemes.Yeti, <YetiPage />],
    // [GlobalThemes.Heroes, <HeroPage />],
    // [GlobalThemes.SpaceNews, <SpaceNews />],
    // [GlobalThemes.Burgers, <BobsBurgers />],
    // [GlobalThemes.DND, <DndMain />],
    // [GlobalThemes.Social, <SocialPage />]
  ]), []);
  const newPage = useMemo(() => routes.get(url), [routes, url]);
  const checkBackground = () => {
    switch (url) {
      case GlobalThemes.Resume:
      case GlobalThemes.Contact:
      case GlobalThemes.Gallery:
      case GlobalThemes.Projects:
      case GlobalThemes.SpaceNews:
        return true;
      default:
        return false;
    }
  };
  const showBackground = checkBackground();
  const showStars = showBackground;
  
  useEffect(() => {
    if (url === "") {
      navigate("/" + GlobalThemes.Resume);
    }
  }, [url, navigate]);

  const backgroundStyle = !showStars ? {} : ({
    backgroundImage: `url(${backgroundImage})`
  });
  
  return (
    <div className={url} style={showBackground ? backgroundStyle : {}}>
        <TopNav />
        <div id="animationOverlay" className={`animationOverlay ${url}`}>
          {showStars && <Stars />}
        </div>
        <div
          className={`renderContainer ${url}`}
        >
          <CalculatedScrollComponent className={"mainContent " + url} hasButtons={false} refresh={[]} sidebarCollapsed={false}>
            {!newPage ? <div /> : newPage}
          </CalculatedScrollComponent>
        </div>
    </div>
  );
};
export default RenderComponent;

export const CalculatedScrollComponent = (props: {
  children: any;
  hasButtons: boolean;
  refresh: any[];
  overflowHidden?: boolean;
  sidebarCollapsed: boolean;
  className?: string;
}) => {
  const dimensions = useWindowDimensions();
  const resizeRef = useRef<any>(null);
  const buttonSpacing = useRef<number>(0);
  const resizeChildrenContainer = useCallback(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if (resizeRef && resizeRef.current) {
      resizeRef.current.style.height = window.innerHeight + 'px';
      let width = window.innerWidth;
      if (!dimensions.isMobile) {
        width = width; // - (props.sidebarCollapsed ? 48 : 200);
      }
      resizeRef.current.style.width = width + 'px';
    }
  }, [
    dimensions.isMobile,
    props.sidebarCollapsed
  ]);
  const initialResize = useCallback((firstCall?: boolean) => {
    if (resizeRef.current) {
      resizeChildrenContainer();
      if (firstCall) {
        setTimeout(() => {
          initialResize();
        }, 500);
      }
    } else {
      setTimeout(() => {
        initialResize();
      }, 500);
    }
  }, [
    resizeChildrenContainer
  ]);
  useEffect(() => {
    window.addEventListener("resize", resizeChildrenContainer);
    resizeChildrenContainer();
    initialResize(true);
    return () => {
      window.removeEventListener("resize", resizeChildrenContainer);
    };
  }, [
    initialResize,
    resizeChildrenContainer
  ]);
  useEffect(() => {
    buttonSpacing.current = props.hasButtons ? 72 : 0;
  }, [props.hasButtons]);
  useEffect(() => {
    resizeChildrenContainer();
  }, [
    resizeRef, 
    props.refresh, 
    props.sidebarCollapsed, 
    dimensions,
    resizeChildrenContainer
  ]);
  
  return (
    <div
      ref={resizeRef}
      id="scrollComponent"
      className={`scrollComponent ${props.className}`}
      style={{
        overflowY: props.overflowHidden ? "hidden" : "auto",
      }}
    >
      {props.children}
    </div>
  );
};
