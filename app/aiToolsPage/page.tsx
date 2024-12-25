
import React, { Suspense } from 'react';
import AiToolsList from "../../sections/AiTools/AiToolsList";
import Header from"../../sections/header/header"
export default function AiToolPage() {
  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
  <Header/>
      <div>
        <AiToolsList />
      </div>
    </Suspense>
  );
}
