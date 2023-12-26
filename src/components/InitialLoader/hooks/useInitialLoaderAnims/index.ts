import { useSpring } from "react-spring";

const CROSS_DELAY = 300;
const DELAY_BETWEEN_CROSSES = 100;

interface InitialLoaderAnims {
    crossAnim1: any;
    crossAnim2: any;
    crossAnim3: any;
    crossAnim4: any;
    crossAnim5: any;
    crossAnim6: any;
    crossAnim7: any;
    crossAnim8: any;
    crossAnim9: any;
    loaderAnim: any;
    logoAnim: any;
    textAnim: any;
}

function useInitialLoaderAnims(): InitialLoaderAnims {
    const loaderAnim = useSpring({
        "delay": 2000,
        "from": {
            "opacity": 1,
            "transform": "translate3d(0, 0%, 0)"
        },
        "opacity": 1,
        "transform": "translate3d(0, -100%, 0)",
    });

    const textAnim = useSpring({
        "from": {
            "opacity": 0,
            "transform": "translate3d(-200%, 0, 0)"
        },
        "opacity": 1,
        "transform": "translate3d(0%, 0, 0)"
    });

    const logoAnim = useSpring({
        "from": {
            "opacity": 0,
            "transform": "translate3d(0, 100%, 0) scale(0)",
        },
        "opacity": 1,
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    const crossAnim1 = useSpring({
        "delay": CROSS_DELAY + 0 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(0, 100%, 0) scale(0)",
        },
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    const crossAnim2 = useSpring({
        "delay": CROSS_DELAY + 1 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(0, 100%, 0) scale(0)",
        },
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    const crossAnim3 = useSpring({
        "delay": CROSS_DELAY + 2 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(0, 100%, 0) scale(0)",
        },
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    const crossAnim4 = useSpring({
        "delay": CROSS_DELAY + 3 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(100%, 0, 0) scale(0)",
        },
        "transform": "translate3d(0%, 0, 0) scale(1)"
    });

    const crossAnim5 = useSpring({
        "delay": CROSS_DELAY + 4 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(100%, 0, 0) scale(0)",
        },
        "transform": "translate3d(0%, 0, 0) scale(1)"
    });

    const crossAnim6 = useSpring({
        "delay": CROSS_DELAY + 5 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(0, -100%, 0) scale(0)",
        },
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    const crossAnim7 = useSpring({
        "delay": CROSS_DELAY + 6 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(0, -100%, 0) scale(0)",
        },
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    const crossAnim8 = useSpring({
        "delay": CROSS_DELAY + 7 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(0, -100%, 0) scale(0)",
        },
        "transform": "translate3d(0, 0%, 0) scale(1)"
    });

    const crossAnim9 = useSpring({
        "delay": CROSS_DELAY + 8 * DELAY_BETWEEN_CROSSES,
        "from": {
            "transform": "translate3d(-100%, 0, 0) scale(0)",
        },
        "transform": "translate3d(0%, 0, 0) scale(1)"
    });

    return {
        crossAnim1,
        crossAnim2,
        crossAnim3,
        crossAnim4,
        crossAnim5,
        crossAnim6,
        crossAnim7,
        crossAnim8,
        crossAnim9,
        loaderAnim,
        logoAnim,
        textAnim,
    };
}

export default useInitialLoaderAnims;
