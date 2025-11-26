'use client'

import { designWebDataPage } from '@/data/services/web-design';
import { motion } from 'framer-motion'
import { Check, Code, Database, Rocket, Shield, Zap } from 'lucide-react';


function TehchnicalPage() {
    return (

        <section id="technologies" className="py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-2xl font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]">
                        <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                            Công Nghệ Toàn Diện
                        </span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                        <strong className="text-white">Gia Bảo Digital</strong> thành thạo
                        mọi ngôn ngữ lập trình và công nghệ hiện đại - từ Website, Mobile
                        App đến Cloud Deploy. Chúng tôi là đối tác công nghệ đáng tin cậy
                        cho mọi dự án của bạn!
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {designWebDataPage.technologies.map((card, idx) => (
                        <motion.div
                            key={idx}
                            className="rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-800 bg-black text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="p-6 flex flex-col items-center text-center">
                                <div className="mb-4">{card.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                {card.description && (
                                    <p className="text-gray-400 mb-3">{card.description}</p>
                                )}
                                {card.items && (
                                    <div className="text-sm space-y-1">
                                        {card.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <Code className="h-4 w-4 text-green-400" />
                                                <span className="text-gray-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Cloud & DevOps Deployment
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "Cloud Platforms",
                                description: "AWS, GCP, Azure, Vercel, Netlify",
                                icon: Rocket,
                            },
                            {
                                title: "DevOps & CI/CD",
                                description: "Docker, Kubernetes, Jenkins, GitHub Actions",
                                icon: Shield,
                            },
                            {
                                title: "Infrastructure",
                                description: "Terraform, Ansible, Monitoring",
                                icon: Database,
                            },
                            {
                                title: "Performance",
                                description: "CDN, Caching, Load Balancing",
                                icon: Zap,
                            },
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                className="rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-800 bg-black text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="mb-4">{<card.icon className='size-6' />}</div>
                                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                    {card.description && (
                                        <p className="text-gray-400 mb-3">{card.description}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Đối tác công nghệ Uy tín */}
                <motion.div
                    className="text-center bg-black border border-gray-800 rounded-2xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            Gia Bảo Digital - Đối Tác Công Nghệ Toàn Diện
                        </h3>
                        <p className="text-lg text-gray-300 mb-6">
                            <strong className="text-white">
                                Không có giới hạn công nghệ!
                            </strong>
                            Chúng tôi thành thạo mọi ngôn ngữ lập trình, framework và
                            platform. Từ ý tưởng đến triển khai hoàn chỉnh - chúng tôi làm
                            được tất cả!
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {designWebDataPage.partners.map((list, idx) => (
                                <div key={idx} className="text-left">
                                    <h4 className={`font-bold mb-3 ${list.color}`}>
                                        {list.title}
                                    </h4>
                                    <ul className="text-sm space-y-1 text-gray-300">
                                        {list.items.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                            <div className="flex items-center gap-2 bg-green-900 border border-green-800 px-4 py-2 rounded-full">
                                <Check className="stroke-green-400 size-4" />
                                <span className="text-green-300">Mọi ngôn ngữ lập trình</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-900 border border-blue-800 px-4 py-2 rounded-full">
                                <Check className="stroke-blue-400 size-4" />
                                <span className="text-blue-300">Full-stack development</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-900 border border-purple-800 px-4 py-2 rounded-full">
                                <Check className="stroke-purple-400 size-4" />
                                <span className="text-purple-300">Cloud deployment</span>
                            </div>
                            <div className="flex items-center gap-2 bg-orange-900 border border-orange-800 px-4 py-2 rounded-full">
                                <Check className="stroke-orange-400 size-4" />
                                <span className="text-orange-300">24/7 Support</span>
                            </div>
                        </div>
                        <p className="text-base font-medium text-gray-300">
                            💡
                            <em className="text-yellow-400">
                                "Bạn có ý tưởng - chúng tôi có công nghệ để hiện thực hóa!"
                            </em>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>


    );
}

export default TehchnicalPage