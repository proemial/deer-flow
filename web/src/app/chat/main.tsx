// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

"use client";

import { useMemo } from "react";

import { useStore } from "~/core/store";
import { cn } from "~/lib/utils";

import { MessagesBlock } from "./components/messages-block";
import { ResearchBlock } from "./components/research-block";

export default function Main() {
  const openResearchId = useStore((state) => state.openResearchId);
  const doubleColumnMode = useMemo(
    () => openResearchId !== null,
    [openResearchId],
  );

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row h-full w-full justify-center-safe px-4 pt-12 pb-4",
        doubleColumnMode && "gap-12 lg:gap-8",
        !doubleColumnMode && "lg:max-w-[768px] lg:container lg:mx-auto",
      )}
    >
      <div className={cn(
        "flex h-full w-full flex-col transition-all duration-300 ease-out",
        doubleColumnMode && "lg:w-2/5",
        !doubleColumnMode && "lg:w-full"
      )}>
        <MessagesBlock className="w-full"/>
      </div>
      <div className={cn(
        "flex h-full w-full transition-all duration-300 ease-out",
        doubleColumnMode && "lg:w-3/5",
        !doubleColumnMode && "lg:w-full hidden scale-0"
      )}>
        <ResearchBlock className="pb-4" researchId={openResearchId} />
      </div>
    </div>
  );
}
