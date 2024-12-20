
import { throttle } from "../../scripts/throttle.mjs";

document.addEventListener("mousemove", throttle(50, e =>
	{
	if (e.buttons === 1)
		{
		console.debug(`${e.clientX}, ${e.clientY}`);
		}
	}));
