/* istanbul ignore file */
import React, { useRef, useCallback, useState } from "react";

const fabric = require("fabric").fabric;

/**
 * Thank you StackOverflow https://stackoverflow.com/a/58894059/2486357
 * @param onChange
 * @returns
 */
export const useFabric = (onChange: (fabricCanvas: any) => void) => {
  const fabricRef = useRef<any>();

  const disposeRef = useRef<any>();
  return useCallback(
    (node: any) => {
      if (node) {
        fabricRef.current = new fabric.Canvas(node);
        if (onChange) {
          disposeRef.current = onChange(fabricRef.current);
        }
      } else if (fabricRef.current) {
        fabricRef.current.dispose();
        if (disposeRef.current) {
          disposeRef.current();
          disposeRef.current = undefined;
        }
      }
    },
    [onChange]
  );
};
