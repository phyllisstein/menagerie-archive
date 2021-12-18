import chroma from 'chroma-js'

export const COLORS = {
    /**
     * lch(25% 60 285deg)
     * rgb(0% 21.67% 55.88%)
     * color(display-p3 0 0.2113 0.567)
     */
    BLUE: chroma({ c: 60, h: 285, l: 25 }),

    /**
     * lch(30% 100 60deg)
     * rgb(43.66% 21.31% 0%)
     * color(display-p3 0.4284 0.2108 0)
     */
    BROWN: chroma({ c: 100, h: 60, l: 30 }),

    /**
     * lch(25% 100 140deg)
     * rgb(0% 27.43% 6.29%)
     * color(display-p3 0 0.2797 0.0249)
     */
    GREEN: chroma({ c: 100, h: 140, l: 25 }),

    /**
     * lch(98% 5 80deg)
     * rgb(89.99% 95.15% 100%)
     * color(display-p3 0.9928 0.975 0.9435)
     */
    LEAD_WHITE: chroma({ c: 5, h: 80, l: 98 }),

    /**
     * lch(65% 100 285deg)
     * rgb(73.55% 0% 15.3%)
     * color(display-p3 0.7087 0 0.1581)
     */
    LIGHT_BLUE: chroma({ c: 100, h: 285, l: 65 }),

    /**
     * lch(40% 100 40deg)
     * rgb(82.84% 0% 2.09%)
     * color(display-p3 0.7117 0 0.0672)
     */
    LIGHT_RED: chroma({ c: 100, h: 30, l: 40 }),

    /**
     * lch(50% 90 60deg)
     * rgb(71.78% 36.54% 0%)
     * color(display-p3 0.7215 0.3475 0.0121)
     */
    ORANGE: chroma({ c: 90, h: 60, l: 50 }),

    /**
     * lch(75% 100 10deg)
     * rgb(100% 60.75% 68.15%)
     * color(display-p3 0.993 0.5968 0.6746)
     */
    PINK: chroma({ c: 100, h: 10, l: 75 }),

    /**
     * lch(35% 100 45deg)
     * rgb(60.75% 13.8% 0%)
     * color(display-p3 0.6037 0.1014 0)
     */
    RED: chroma({ c: 100, h: 45, l: 35 }),

    /**
     * lch(65% 100 85deg)
     * rgb(74.41% 59.75% 0%)
     * color(display-p3 0.7364 0.5987 0)
     */
    YELLOW: chroma({ c: 100, h: 85, l: 65 }),
}
