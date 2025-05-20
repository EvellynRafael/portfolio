import { Linkedin, Mail, MapPin, Phone } from "lucide-react"


export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Entre em <span className="text-primary"> Contato </span>
                </h2>

                <p className="text-center text-muted-foreground mb-23 max-w-2xl mx-auto">
                    Tem um projeto em mente ou deseja colaborar? Fique à vontade para entrar em contato.
                    Estou sempre aberta a discutir novas oportunidades.
                </p>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Informações para contato</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">E-mail</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:evellynsilvarafael@outlook.com.br">
                                            evellynsilvarafael@outlook.com.br
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Celular (WhatsApp)</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:+5532984874359">
                                            +55 32 98487-4359
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Localização</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Juiz de Fora - MG, Brasil
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Conecte-se</h3>
                            <div className="flex justify-center space-x-4 " >
                                <a className="hover:text-primary" target="_blank" href="https://www.linkedin.com/in/evellyn-rafael/">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}