import React, { useState } from "react";

interface Props {
  urlPath: string;
}

export default function Desktop({ urlPath }: Props) {
  return <div className="hidden fixed lg:flex z-50" />;
}
