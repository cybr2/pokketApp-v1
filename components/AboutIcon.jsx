import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const AboutIcon = ({...props}) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // width={80}
    // height={100}
    fill="none"
    
    
  >
    <Path
      fill="url(#a)"
      d="M0 50C0 22.386 22.386 0 50 0h5c27.614 0 50 22.386 50 50v55H0V50Z"
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00195)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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8ncAXGLlHQDAzR4y930ql0kkbXRqWh16n0W6y23l8/+wyjUAEMXxfZWJI5JSoRfH1csmIt0Wud+7qq+tsgMAff6Gd8SspkgQEak6FQEi3VWk2Hn/qr64ysHdfjPiXWClCwdERESkxpn90y7PzV/Vl1d7du/wt/InEhERkUpz97+u7uurLQAiUwEg0m2h58brZRORbomcv6/u66tZAwAUMn8ls9KrB0RkBRqdRKRmOI3Z1S7mX20BYJePfjM+buK/AT0XQERqg+oske74l/1y1JzVfcMaV/g7fmf58oiIiEiludsda/qeNRYAkUUzyxNHREREqiEyX+PYvfo1AABu94DngYYyZBJJL7WmRaQ2LCbbscobAC2xxg6AXTpm4aqeJCQiSwu9PL5eNhFZg3vtklzbmr5pzR0AwJyZ7ui5ACISnmoAkdUy1tz+h+7e5tei23uVRkRERKqjm2N29wqATdofBd7sTR6R1AvdGa+XTURW5zUuHfNkd76xWwWA5XKxw597l0lEREQqyfGbDetWqdytNQAAkfstjh3X81giaafT06rQ2yyySpFHt3T7e7u91+bOO4COngQSERGRimunafHd3f3mbhcAdlFuEbDaJwuJ1LXQc+P1sonIyjl/6c7lf0t0vwMAmNuNpScSERGRSrPIbi7l+0sqAPDCn4C4pNeIiIhIpRUpZK4v5QXdXgQIYFeeNjs+ZuJDwJ4lxRKpC+pPV4XeZpGV+btdtfqn/y2vtA4AYPgfS32NiIiIVI45fyj1NSUXAJj9HtXgIisKvTiuXjYRWZ6TKd5Q6otK7wBcPvZl4IlSXyciIiIV4Dxgl532WqkvK70DABjM6MnrREREpLws8h6NySUtAvxAvngN2cxZgPXo9SIiPaVpAJGlxXjcowKgZx2Aa057BXigJ68VSS13bdXYRGQpdrddedrsnryyRwUAgLld09PXioiISO+Zx9f29LU9LgDIxtOBfI9fLyIiIr3RSWOfkm7+s7SedwAuGzcXuLOnrxcREZFeMPuz/WbEuz19ec8WAS45dsxVbhzcm32IpIamp6tD77MIABb71b15fa8KALId11Nsmges3av9iKSCRiYRqZp3WLtfSQ//WV7P1wAAdnluscN1vdmHiIiIlMaNq+38YR292UevCgCAyKLLersPERER6b4oii/v7T56NwUA2JVjHo6PnPgv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"
        id="b"
        // width={512}
        // height={512}
        {...props}
      />
    </Defs>
  </Svg>
  )
}

export default AboutIcon

const styles = StyleSheet.create({})