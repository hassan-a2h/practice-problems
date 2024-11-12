export function hexStringToRGB(hexString: string): {
  r: number;
  g: number;
  b: number;
} {
  return {
    r: hexToDecimal(hexString.slice(1, 3)),
    g: hexToDecimal(hexString.slice(3, 5)),
    b: hexToDecimal(hexString.slice(5)),
  };
}

function hexToDecimal(hex: string): number {
  return Number("0x" + hex);
}

console.log(hexStringToRGB("#FF0000"));
