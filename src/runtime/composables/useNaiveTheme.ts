import useNaiveColorMode from "./useNaiveColorMode";
import useNaiveDevice from "./useNaiveDevice";

export default function useNaiveTheme() {
  const { colorMode } = useNaiveColorMode();
  const { isMobileOrTablet } = useNaiveDevice();

  return {
    colorMode,
    isMobileOrTablet,
  };
}
