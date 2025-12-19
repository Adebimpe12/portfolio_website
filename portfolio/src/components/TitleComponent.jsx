import React,{useState} from 'react';

export default function TitleComponent() {
    const [title, setTitle] = useState ('React Developer Tolu')
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
};
