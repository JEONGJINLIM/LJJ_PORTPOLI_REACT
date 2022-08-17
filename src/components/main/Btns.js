import Anime from '../../assets/Anime';
import { useEffect, useRef } from 'react';

function Btns({ setScrolled, setPos }) {
	const pos = useRef([]);
	const btnRef = useRef(null);
	// const [Index, setIndex] = useState(0);
	// const [Scrolled, setScrolled] = useState(0);
	const speed = 500;
	const num = 4;

	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setPos(pos.current);
	};

	const activation = () => {
		const base = -window.innerHeight / 4;
		const scroll = window.scrollY;
		const btns = btnRef.current.children;
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');

		setScrolled(scroll); //나중에 다시 넣음

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		btnRef.current.children[0].classList.add('on');
		btnRef.current.parentElement
			.querySelectorAll('.myScroll')[0]
			.classList.add('on');

		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	// useEffect(() => {
	// 	console.log(Index);
	// 	new Anime(window, {
	// 		prop: 'scroll',
	// 		value: pos.current[Index],
	// 		duration: 500,
	// 	});
	// }, [Index]);

	return (
		<ul className='scroll_navi' ref={btnRef}>
			{Array(num) //4 였음 원래
				.fill()
				.map((_, idx) => {
					return (
						<li
							key={idx}
							onClick={() => {
								new Anime(window, {
									prop: 'scroll',
									value: pos.current[idx],
									duration: speed,
								});
							}}></li>
					);
				})}
		</ul>
	);
}

export default Btns;

/* <li
				className='on'
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[0]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[0],
								duration: 500,
							});
						}
					} else {
						setIndex(0);
					}
				}}></li>

			<li
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[1]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[1],
								duration: 500,
							});
						}
					} else {
						setIndex(1);
					}
				}}></li>

			<li
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[2]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[2],
								duration: 500,
							});
						}
					} else {
						setIndex(2);
					}
				}}></li>

			<li
				onClick={() => {
					if (Index === 0) {
						if (Scrolled !== pos[3]) {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[3],
								duration: 500,
							});
						}
					} else {
						setIndex(3);
					}
				}}></li> */
