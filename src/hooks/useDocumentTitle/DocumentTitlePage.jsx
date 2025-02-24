import { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';
export default function DocumenTitlePage() {
  const [title, setNewTitle] = useState('Title');
  useDocumentTitle(title);
  return (
    <div>
      <h1 className="text-xl">Hooks - useDocumentTitle</h1>
      <div className="pt-4 flex flex-col gap-1">
        <label htmlFor="title-change">New Title</label>
        <input
          className="border rounded "
          type="text"
          name="title-change"
          id="title-change"
          onChange={(e) => {
            return setNewTitle(e.target.value);
          }}
          value={title}
        />
      </div>
    </div>
  );
}
