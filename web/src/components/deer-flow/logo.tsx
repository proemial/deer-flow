// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      className="opacity-70 transition-opacity duration-300 hover:opacity-100"
      href="/"
    >
      <div className="flex items-center gap-2">
        <div className="text-red-500 dark:text-blue-400">
          <Image className="w-4 h-4" alt="Frame" src="/images/proem-logo.svg" width={16} height={16} />
        </div>
        <div>DeerFlow</div>
      </div>
    </Link>
  );
}
