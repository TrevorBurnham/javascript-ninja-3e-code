import { writeHeapSnapshot } from "v8";

const prepareNinjaPower = () => {
  const powerBuffer = new ArrayBuffer(99_000_000);

  (() => {
    console.log(
      `Ninja power level: ${powerBuffer.byteLength.toLocaleString()}`,
    );
  })();

  return () => {
    console.log("The ninja power is safe.");
  };
};

const reportNinjaPower = prepareNinjaPower();
reportNinjaPower();
writeHeapSnapshot("1-before-gc.heapsnapshot");

if (global.gc) {
  console.log("Running garbage collection");
  global.gc(true);
  writeHeapSnapshot("2-after-gc.heapsnapshot");
}
