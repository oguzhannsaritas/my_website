import Image from "next/image"
import Link from "next/link"

interface AboutProps {
    title?: string
    subtitle?: string
    description?: string
}

export default function About({ }: AboutProps) {
    return (
        <section id="about" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

                <div className="md:flex md:items-start gap-10">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <Image
                            src="/main.jpeg"
                            alt="Oğuzhan Sarıtaş"
                            width={400}
                            height={400}
                            className="rounded-lg mx-auto object-cover"
                            priority
                        />
                    </div>

                    <div className="md:w-2/3 md:pl-2">
                        <p className="mb-4 text-lg">
                            I’m <span className="font-semibold">Oğuzhan Sarıtaş</span>, a
                            <span className="font-semibold"> Front-End Engineer</span> who also leads
                            <span className="font-semibold"> QA & Test Automation</span> practices. I build modern, accessible interfaces and
                            guarantee reliability with end-to-end testing, performance budgets, and continuous delivery.
                        </p>

                        <p className="mb-4">
                            My focus is turning product and design intent into fast, resilient UIs — then backing them with robust automation,
                            CI/CD pipelines, and meaningful quality signals (coverage, flakiness, visual diffs, and perf metrics).
                            I’m comfortable owning the loop from component systems to E2E flows and release health.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            <div className="rounded-lg bg-gradient-to-br from-white/30 to-white/10 text-white p-4">
                                <h3 className="font-semibold mb-2">Heybooster</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm ">
                                    <li>Vue 2 + Webpack → Vue 3 + Vite migration (faster build, better DX)</li>
                                    <li>E2E infrastructure: test architecture, register/harness, CI integrations</li>
                                    <li>Heavy pages <span className="font-medium">~35 sn → &lt; 3 sn</span> optimization that reduces it to the level of</li>

                                </ul>
                            </div>
                            <div className="rounded-lg bg-gradient-to-br from-white/30 to-white/10 text-white p-4">
                                <h3 className="font-semibold mb-2">Pixa Software (WMS/OMS)</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm ">
                                    <li>Vue 2 + Webpack → Vue 3 interface transfer, design system and component library </li>
                                    <li>E2E infrastructure: test architecture, register/harness, CI integrations</li>
                                    <li>User-oriented invoice generation system with coordinate system similar to figma </li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-gradient-to-br from-white/30 to-white/10 text-white p-4">
                                <h3 className="font-semibold mb-2 ">TestBase (Personal Project)</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm ">
                                    <li>AI-powered test automation: record/replay, live harness, visual evidence, Xpath, and all-in-all language model </li>
                                    <li>Flow that combines UI + API testing in one scenario</li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-gradient-to-br from-white/30 to-white/10  p-4">
                                <h3 className="font-semibold mb-2 text-white"> Stack</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm text-white">
                                    <li>React/Next.js, Vue 3, TypeScript, Tailwind, Vite</li>
                                    <li>Playwright, Selenium, JMeter, Puppeteer</li>
                                    <li>Node/Express, GraphQL/REST, MongoDB, Postgres</li>
                                    <li>Jenkins, Docker, CI/CD</li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex flex-wrap items-center gap-3 mt-8">
                            <Link
                                href="mailto:oguzhan_saritass@hotmail.com"
                                className="px-4 py-2 rounded-md border border-white/30 hover:bg-white/10"
                            >
                                Email
                            </Link>
                            <Link
                                href="https://github.com/oguzhannsaritas"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-md border border-white/30 hover:bg-white/10"
                            >
                                GitHub
                            </Link>

                            <Link
                                href="https://medium.com/@oguzhannsaritas"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-md border border-white/30 hover:bg-white/10"
                            >
                                Medium
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/oguzhannsaritas/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-md border border-white/30 hover:bg-white/10"
                            >
                                LinkedIn
                            </Link>

                            <button
                                rel="tel"
                                className="px-4 py-2 rounded-md border border-white/30 hover:bg-white/10"
                            >
                                (+90) 537 460 76 99
                            </button>
                        </div>

                        <div className="mt-8 text-sm text-white/80">
                            <p className="mb-1"><span className="font-semibold">Currently:</span> refining E2E reliability, building DX tooling, and shipping performant UI flows.</p>
                            <p><span className="font-semibold">Open to:</span> senior front-end roles with strong quality culture and measurable product impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
