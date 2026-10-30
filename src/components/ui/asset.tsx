import assetDimensions from "@/lib/asset-dimensions.json";

type AssetProps = { name: string; alt?: string; className?: string };

/** Original vector assets retain their Figma intrinsic dimensions. */
export function Asset({ name, alt = "", className }: AssetProps) {
  const dimensions = assetDimensions[name as keyof typeof assetDimensions];
  return (
    <img
      src={`/figma/${name}`}
      alt={alt}
      width={dimensions?.width}
      height={dimensions?.height}
      className={className}
    />
  );
}
