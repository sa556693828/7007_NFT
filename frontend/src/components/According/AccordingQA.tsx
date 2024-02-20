import { useState } from "react";

interface Props {
  data: {
    question: string;
    answer: { title: string; content: string }[];
    active: number;
  };
}

export default function AccordingQA({ data }: Props) {
  const [hover, setHover] = useState(false);
  const [item, setItem] = useState(data);

  const handleToggle = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };
  return (
    <div
      onClick={handleToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${item.active === 1 || hover ? "text-buttonGr" : "text-white"} ${item.active === 1 ? "is-active" : ""} group cursor-pointer transition-all`}
    >
      <div className="py-[6px]">
        <a className="pl-[8px] text-[10px] tracking-tight">{data.question}</a>
      </div>
      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 group-[.is-active]:max-h-[330px]`}
      >
        {data.answer.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 pb-4 pl-[8px] pt-4 text-[10px] tracking-tight"
          >
            {item.title ? <a className="font-bold">{item.title}</a> : null}
            <a className="">{item.content}</a>
          </div>
        ))}
      </div>
      <div
        className={`${item.active === 1 || hover ? "from-buttonGr to-buttonGr/0" : "from-white to-white/0"}  h-[1.1px] w-full bg-gradient-to-r`}
      />
    </div>
  );
}
