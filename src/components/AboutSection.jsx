import { Briefcase, Code, User } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="containet mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedora Web/Mobile
            </h3>

            <p className="text-muted-foreground">
              Atuo com desenvolvimento web há mais de 3 anos, com foco em Frontend, criando interfaces bonitas, responsivas 
              e intuitivas que melhoram a experiência do usuário e otimizam a interação com sistemas digitais. 
            </p>

            <p className="text-muted-foreground">
              Apaixonada pela criação de experiências interativas e funcionais, estou constantemente melhorando minhas competências e 
              aprendendo novas tecnologias para oferecer soluções inovadoras e de alta qualidade. Sempre pronta a aceitar novos desafios.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className="cosmic-button">
                Entre em Contato
              </a>

              <a href="/cv.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download>
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg"> Foco</h4>
                  <p className="text-muted-foreground">
                    Tenho foco no frontend criando sites responsivos e aplicativos para Web utilizando React, TailwindCSS e Material. 
                     Atualmente, estou estudando Java/Kotlin para ampliar meu conhecimento em desenvolvimento mobile e FullStack.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg"> Pessoalmente</h4>
                  <p className="text-muted-foreground">
                    Além da paixão por tecnologia, sou skatista de um coletivo feminino, participo de trabalhos voluntários e ações sociais através do esporte.
                    Busco aplicar meus conhecimentos em desenvolvimento para criar páginas de apresentação para as instituições como trabalho voluntário.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* Mudar aqui talvez para desenvolvimento de jogos talvez */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg"> Atualmente</h4>
                  <p className="text-muted-foreground">
                    Sou Analista de Tecnologia, criando soluções e automações com as ferramentas da Power Plataforma da Microsoft. 
                    Estou buscando novas oportunidades em desenvolvimento web e/ou mobile. 
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

