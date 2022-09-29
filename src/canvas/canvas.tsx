import { useFabric } from "./fabric";

export function Canvas(props: {
  canvasHook: (canvas: any) => void;
  width: number;
  height: number;
}) {
  const ref = useFabric((fabricCanvas: any) => {
    props.canvasHook(fabricCanvas);
  });
  return (
    <>
      <div style={{ display: "inline-block" }}>
        <canvas
          style={{ borderColor: "black", border: "solid" }}
          ref={ref}
          width={props.width}
          height={props.height}
        />
      </div>
    </>
  );
}
