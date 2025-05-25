interface HeroPropsBoxProps {
  icon?: string;
  text: string;
}

function HeroPropsBox({ icon, text }: HeroPropsBoxProps) {
  const styles = `
 .gradient-box {
	 display: flex;
	 align-items: center;
	 margin: auto;
	 position: relative;
	 box-sizing: border-box;
	 color: #fff;
	 background-color: #1D2939;
	 background-clip: padding-box;
	 border: solid 5px transparent;
	 border-radius: .6em;
}
 .gradient-box:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 z-index: -1;
	 margin: -2px -2px;
	 border-radius: inherit;
	 background: linear-gradient(to left, var(--primary), #01DDFF);
}
 
  `;
  return (
    <>
      <style>{styles}</style>
      <div className="flex gap-4 rounded-sm gradient-box w-full py-5 px-4">
        {/* <img src="" alt="" /> */}
        <span>{text}</span>
      </div>
    </>
  );
}

export default HeroPropsBox;
