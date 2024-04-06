import compile from "./compile.js";

compile(`
    maanlo x = 5;
    jabtak (x>0) {
        bolo x;
        x = x-1;
    }

    agar (x == 0) {
        bolo 5+x;
    }
    warna {
        bolo 4*x;
    }
`);
