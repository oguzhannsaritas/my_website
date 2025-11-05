import Image from "next/image"




export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20 text-white">
            <div className="container mx-auto px-6 py-24 md:flex md:items-center">
                <div className="md:w-2/3">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Oğuzhan Sarıtaş</h1>
                    <h2 className="text-2xl md:text-3xl mb-6">
                        Front-End Engineer · QA & Test Automation
                    </h2>
                    <p className="text-lg mb-3">
                        I craft accessible, performant UIs and back them with end-to-end tests, automation, and CI-driven quality gates.
                    </p>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0">
                    <Image
                        src="main.jpeg"
                        alt="Oğuzhan Sarıtaş"
                        width={400}
                        height={400}
                        className="rounded-lg mx-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
