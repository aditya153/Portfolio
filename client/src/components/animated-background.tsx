import { useEffect, useRef, useState } from 'react';

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const [easterEggActive, setEasterEggActive] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Easter Egg: Ctrl+Shift+D
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                setEasterEggActive(true);
                setTimeout(() => setEasterEggActive(false), 5000); // Return to normal after 5s
            }
        };
        window.addEventListener('keydown', handleKeyPress);

        // Floating objects (company logos)
        class FloatingObject {
            x: number;
            y: number;
            speedX: number;
            speedY: number;
            baseSpeedX: number; // Original speed
            baseSpeedY: number; // Original speed
            size: number;
            opacity: number;
            type: string;
            company: string;
            color: string; // German flag color

            constructor() {
                if (!canvas) return;
                // Start from random position
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                // Random direction movement (slower)
                this.baseSpeedX = (Math.random() - 0.5) * 0.4; // Range: -0.2 to 0.2
                this.baseSpeedY = (Math.random() - 0.5) * 0.4; // Range: -0.2 to 0.2
                this.speedX = this.baseSpeedX;
                this.speedY = this.baseSpeedY;

                this.size = Math.random() * 15 + 20; // Smaller: 20-35px
                this.opacity = Math.random() * 0.25 + 0.6; // Much higher: 0.6-0.85

                // German flag colors: Black->White (for visibility), Red, Gold
                const germanColors = [
                    '#FFFFFF', // White (was Black, but black is invisible on dark bg)
                    '#DD0000', // Red
                    '#FFCE00', // Gold
                ];
                this.color = germanColors[Math.floor(Math.random() * germanColors.length)];

                // 25 Famous German Companies
                const companies = [
                    // Automotive
                    '🚗 BMW',
                    '🚗 Audi',
                    '🏎️ Porsche',
                    '🚙 Mercedes-Benz',
                    '🚙 Volkswagen',
                    '🚗 Opel',
                    '⚙️ Continental',
                    // Tech & Software
                    '💼 SAP',
                    '🔧 Siemens',
                    '🔩 Bosch',
                    '💻 TeamViewer',
                    '📊 Software AG',
                    '🔌 Infineon',
                    // Finance & Insurance
                    '🏦 Deutsche Bank',
                    '🛡️ Allianz',
                    '💳 N26',
                    // Telecom & E-commerce
                    '📱 Deutsche Telekom',
                    '🛍️ Zalando',
                    '🍔 Delivery Hero',
                    // Logistics & Transport
                    '✈️ Lufthansa',
                    '📦 DHL',
                    // Industrial & Chemicals
                    '🏭 BASF',
                    '💊 Bayer',
                    '⚒️ ThyssenKrupp',
                    // Sports & Lifestyle
                    '👟 Adidas',
                ];
                this.company = companies[Math.floor(Math.random() * companies.length)];
                this.type = 'company';
            }

            update() {
                if (!canvas) return;

                // Mouse repulsion effect
                const mouse = mouseRef.current;
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repelRadius = 150; // Distance from mouse to start repelling

                if (distance < repelRadius && distance > 0) {
                    // Push away from mouse
                    const force = (repelRadius - distance) / repelRadius;
                    const repelX = (dx / distance) * force * 3;
                    const repelY = (dy / distance) * force * 3;

                    this.speedX = this.baseSpeedX + repelX;
                    this.speedY = this.baseSpeedY + repelY;
                } else {
                    // Return to base speed gradually
                    this.speedX += (this.baseSpeedX - this.speedX) * 0.1;
                    this.speedY += (this.baseSpeedY - this.speedY) * 0.1;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around all edges
                if (this.x > canvas.width + 100) this.x = -100;
                if (this.x < -100) this.x = canvas.width + 100;
                if (this.y > canvas.height + 100) this.y = -100;
                if (this.y < -100) this.y = canvas.height + 100;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.globalAlpha = this.opacity;

                // Draw company name with emoji
                ctx.font = `bold ${this.size}px Arial, sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Use German flag color with glow
                ctx.shadowBlur = 18;
                ctx.shadowColor = this.color;
                ctx.fillStyle = this.color;
                ctx.fillText(this.company, 0, 0);

                ctx.restore();
            }
        }

        // Create objects
        const objects: FloatingObject[] = [];
        const objectCount = 25;

        for (let i = 0; i < objectCount; i++) {
            const obj = new FloatingObject();
            objects.push(obj);
        }

        // Draw connection lines between nearby companies
        const drawConnections = () => {
            objects.forEach((obj1, i) => {
                objects.slice(i + 1).forEach(obj2 => {
                    const dx = obj1.x - obj2.x;
                    const dy = obj1.y - obj2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) { // Connect if within 200px
                        const opacity = (1 - distance / 200) * 0.35; // Increased from 0.15 to 0.35
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`; // Blue color instead of white
                        ctx.lineWidth = 1.5; // Slightly thicker
                        ctx.moveTo(obj1.x, obj1.y);
                        ctx.lineTo(obj2.x, obj2.y);
                        ctx.stroke();
                    }
                });
            });
        };

        // Animation loop
        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections first (behind companies)
            drawConnections();

            objects.forEach(obj => {
                obj.update();
                obj.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Dark gradient background */}
            <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

            {/* Berlin Landmarks - Subtle Silhouettes */}
            <div className="fixed inset-0 -z-19 opacity-[0.03] overflow-hidden pointer-events-none">
                {/* Brandenburg Gate - Bottom Left */}
                <div className="absolute bottom-0 left-10 text-white/20 text-[200px] select-none">
                    🏛️
                </div>
                {/* TV Tower - Top Right */}
                <div className="absolute top-10 right-20 text-white/20 text-[180px] select-none">
                    🗼
                </div>
                {/* Reichstag - Bottom Right */}
                <div className="absolute bottom-10 right-1/4 text-white/20 text-[150px] select-none">
                    🏛️
                </div>
            </div>

            {/* Subtle gradient accents */}
            <div className="fixed inset-0 -z-18">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            {/* Canvas for floating objects - Visible layer */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-10 pointer-events-none"
            />

            {/* Minimal grid pattern */}
            <div
                className="fixed inset-0 -z-9 opacity-[0.015]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px'
                }}
            />
        </>
    );
}
