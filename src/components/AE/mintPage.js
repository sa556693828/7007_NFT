import { useEffect, useRef } from 'react';

const Box = () => {
    const renderRef = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('p5').then(({ default: p5 }) => {
                const sketch = (p) => {
                    let cols, rows;
                    let scl = 25;
                    let w = 2000;
                    let h = 480;
                    let terrain = [];
                    let wave = 0;
                    let clrR = 255;
                    let clrG = 255;
                    let clrB = 255;

                    p.setup = () => {
                        const canvasWidth = window.innerWidth * 1;
                        const canvasHeight = window.innerHeight * 1;
                        p.createCanvas(canvasWidth, canvasHeight, p.WEBGL).parent(renderRef.current);
                        cols = w / scl;
                        rows = h / scl;
                        window.addEventListener('resize', () => {
                            const canvasWidth = window.innerWidth * 1;
                            const canvasHeight = window.innerHeight * 1;
                            p.resizeCanvas(canvasWidth, canvasHeight); // 調整畫布大小
                        });

                    };

                    p.draw = () => {
                        // 滑鼠距離中心
                        let msTX = p.abs((p.mouseX - p.width / 2));

                        // 動態山脈
                        wave += -0.02;
                        let yoff = 0;
                        for (let x = 0; x < cols; x++) {
                            terrain[x] = [];
                            let xoff = wave;
                            for (let y = 0; y < rows; y++) {
                                terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -150, 200);
                                xoff += 0.1;
                            }
                            yoff += 0.2 + p.map(p.noise(0, 0), 0, 1, 0, 5);
                        }

                        p.background(0);
                        p.stroke(clrR, clrG, clrB);
                        p.strokeWeight(0.5);
                        p.fill(0);
                        p.translate(0, 400, 150);
                        p.rotateX(p.PI / 2.2);
                        p.translate(-w / 2, -h / 2);
                        for (let y = 0; y < rows - 1; y++) {
                            p.beginShape(p.TRIANGLE_STRIP);
                            for (let x = 0; x < cols; x++) {
                                p.vertex(x * scl, y * scl, terrain[x][y]);
                                p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
                            }
                            p.endShape();
                        }
                        // 位移復原
                        p.translate(w / 2, h / 2);
                        p.rotateX(-p.PI / 2);
                        p.translate(0, -400, -150);

                        // 盒子
                        let msX = p.map(p.mouseY, p.width, 0, 0, 3);
                        let msY = p.map(p.mouseX, p.height, 0, 0, 3);
                        p.push();
                        p.noFill();
                        p.stroke(clrR, clrG, clrB);
                        p.translate(0, -100, 0);
                        p.rotateX(p.frameCount / 180 + msX);
                        p.rotateY(-p.frameCount / 120 + msY);
                        p.ellipsoid(1800, 1800, 1800, 8, 4);
                        p.ellipsoid(20, 30, 20, 8, 2);
                        p.box(40 + msTX * 4);
                        p.box(180);
                        p.box(175);
                        p.box(130 + p.sin(-p.frameCount / 60) * 40);
                        p.fill(clrR, clrG, clrB, 60);
                        p.box(90);
                        p.box(280, 3, 3);
                        p.box(100, 20, 20);
                        p.box(140, 10, 10);
                        p.rotateY(p.PI / 2);
                        p.box(280, 3, 3);
                        p.box(100, 20, 20);
                        p.box(140, 10, 10);
                        p.rotateZ(p.PI / 2);
                        p.box(280, 3, 3);
                        p.box(100, 20, 20);
                        p.box(140, 10, 10);
                        p.fill(0);
                        p.translate(0, 0, 180);
                        p.box(15);
                        p.translate(0, 0, -360);
                        p.box(15);
                        p.translate(0, 180, 180);
                        p.box(15);
                        p.translate(0, -360, 0);
                        p.box(15);
                        p.translate(180, 180, 0);
                        p.box(15);
                        p.translate(-360, 0, 0);
                        p.box(15);
                        p.translate(180, 0, 0);
                        p.pop();

                        // 點雲
                        p.fill(clrR, clrG, clrB);
                        p.stroke(clrR, clrG, clrB);
                        p.strokeWeight(0.3);
                        p.rotateY((p.frameCount / 300) * 1 + msY);
                        p.rotateZ(p.PI / 4);
                        for (let i = 0; i < 100; i += 3) {
                            for (let o = 0; o < 100; o += 3) {
                                p.rotateX(i + o / 5);
                                p.rotateY(i / 6);
                                p.translate(i, o, i + o * 2 - 200);
                                p.rect((10 - msTX / 100) / 2, (10 - msTX / 100) / 2, (10 - msTX / 100) / 2);
                            }
                        }
                    };
                };
                new p5(sketch);
            })
        }
    }, []);

    return <div ref={renderRef} className="absolute top-0 -left-2 z-1" />;
};

export default Box;
