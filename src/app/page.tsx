import { Button } from "@/components/ui/button";
import Image from "next/image";
import kidsImg from "@/assets/imgs/kids.webp";
import kidsRunningImg from "@/assets/imgs/kids-running.webp";
import kidsLearning from "@/assets/imgs/kids-learning.webp";
import education from "@/assets/education.svg";
import assistance from "@/assets/assistance.svg";
import justice from "@/assets/justice.svg";
import { ViolenceTypes } from "@/components/violence-types";
import { Summary } from "@/components/ui/summary";
import { LegislationItem } from "@/components/legislation-item";
import { SlideUp } from "@/components/ui/slide-up";
import { ScaleIn } from "@/components/ui/scale-in";
import { ReportViolence } from "@/components/report-violence";

export default function Home() {
  return (
    <main>
      <section className="bg-white py-2 text-center">
        <p className="text-foreground/75">
          Este site é uma demonstração de um projeto dos Alunos de Direito da{" "}
          <strong>Universidade Vila Velha</strong>. Desconsidere as informações
          aqui contidas.
        </p>
      </section>
      <section className="py-6">
        <div className="container flex items-center gap-16">
          <SlideUp>
            <div className="space-y-8">
              <h1 className="text-6xl font-semibold">
                Proteção e Defesa dos Direitos das Crianças
              </h1>
              <p className="text-lg">
                Juntos, podemos acabar com todas as formas de violência contra
                crianças e garantir um futuro mais seguro e justo para elas.
              </p>
              <div className="flex gap-2">
                <ReportViolence />
                <Button variant="outline">Saiba mais</Button>
              </div>
            </div>
          </SlideUp>
          <ScaleIn delay={300}>
            <div>
              <Image className="max-w-sm rounded-sm" src={kidsImg} alt="" />
            </div>
          </ScaleIn>
        </div>
      </section>

      <section className="py-6">
        <div className="container flex items-center gap-16">
          <ScaleIn delay={300}>
            <Image
              className="max-w-60 rounded-sm"
              src={kidsRunningImg}
              alt=""
            />
          </ScaleIn>
          <SlideUp>
            <div className="space-y-8">
              <h2 className="text-5xl font-semibold">
                Definindo os Tipos de Violência
              </h2>

              <div className="flex flex-wrap gap-6">
                <SlideUp delay={400} className="flex-1">
                  <ViolenceTypes
                    number={1}
                    title="Abuso"
                    description="Maus-tratos físicos, emocionais, negligência e exploração sexual."
                  />
                </SlideUp>

                <SlideUp delay={440} className="flex-1">
                  <ViolenceTypes
                    number={2}
                    title="Exploração"
                    description="Trabalho infantil, mendicância, pornografia e tráfico."
                  />
                </SlideUp>

                <SlideUp delay={480}>
                  <ViolenceTypes
                    number={3}
                    className="flex-auto"
                    title="Tráfico"
                    description="Aliciamento, transporte e transferência de crianças para fins de exploração."
                  />
                </SlideUp>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      <section className="bg-foreground py-20">
        <SlideUp>
          <div className="container space-y-16 text-white">
            <h2 className="text-5xl font-semibold">
              Fatores de Risco e Vulnerabilidade
            </h2>

            <div className="flex flex-wrap gap-5">
              <SlideUp delay={400} className="flex-1">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Pobreza</h3>
                  <p className="text-lg">
                    Famílias em situação de vulnerabilidade econômica estão mais
                    expostas à violência.
                  </p>
                </div>
              </SlideUp>

              <SlideUp delay={440} className="flex-1">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Violência Doméstica</h3>
                  <p className="text-lg">
                    Crianças que vivenciam violência em casa têm maior risco de
                    serem vítimas.
                  </p>
                </div>
              </SlideUp>

              <SlideUp delay={480} className="flex-1">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Violência Doméstica</h3>
                  <p className="text-lg">
                    Crianças que vivenciam violência em casa têm maior risco de
                    serem vítimas.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </SlideUp>
      </section>

      <section className="py-20">
        <SlideUp>
          <div className="container space-y-16">
            <h2 className="text-5xl font-semibold">Impactos da Violência</h2>

            <Summary trigger="Efeitos devastadores na saúde física e mental">
              <p>
                A violência pode causar traumas, problemas de comportamento,
                baixo rendimento escolar e dificuldades de relacionamento.
              </p>
            </Summary>
          </div>
        </SlideUp>
      </section>

      <section className="pb-6 pt-1">
        <div className="container flex items-center gap-16">
          <ScaleIn delay={300}>
            <Image className="max-w-sm rounded-sm" src={kidsLearning} alt="" />
          </ScaleIn>

          <SlideUp>
            <div className="space-y-8">
              <h2 className="text-5xl font-semibold">Legislação de Proteção</h2>

              <div className="flex flex-wrap gap-6">
                <SlideUp className="flex-1" delay={400}>
                  <LegislationItem
                    title="Estatuto da Criança e do Adolescente"
                    description="Lei que garante os direitos fundamentais e a proteção integral de crianças e adolescentes."
                  />
                </SlideUp>

                <SlideUp className="flex-1" delay={440}>
                  <LegislationItem
                    title="Convenção sobre os Direitos da Criança"
                    description="Tratado internacional que estabelece princípios universais de proteção à infância."
                  />
                </SlideUp>

                <SlideUp delay={480}>
                  <LegislationItem
                    className="flex-auto"
                    title="Plano Nacional de Enfrentamento"
                    description="Política pública para coordenar ações de prevenção e atendimento às vítimas."
                  />
                </SlideUp>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      <section className="bg-protest bg-center bg-no-repeat py-20">
        <SlideUp>
          <div className="container space-y-16">
            <h2 className="text-5xl font-semibold">Papel da Sociedade Civil</h2>

            <div className="flex flex-wrap gap-5 text-foreground/75">
              <SlideUp className="flex-1" delay={400}>
                <div className="space-y-2">
                  <div className="flex h-14 items-center justify-center rounded-lg bg-[#e5dfd2]">
                    <p className="text-2xl font-bold">1</p>
                  </div>
                  <h3 className="text-xl font-bold">Conscientização</h3>
                  <p className="text-lg">
                    Campanhas e ações de sensibilização sobre o tema.
                  </p>
                </div>
              </SlideUp>

              <SlideUp className="flex-1" delay={440}>
                <div className="space-y-2">
                  <div className="flex h-14 items-center justify-center rounded-lg bg-[#e5dfd2]">
                    <p className="text-2xl font-bold">2</p>
                  </div>
                  <h3 className="text-xl font-bold">Denúncia</h3>
                  <p className="text-lg">
                    Denunciar casos de violência às autoridades competentes.
                  </p>
                </div>
              </SlideUp>

              <SlideUp className="flex-1" delay={480}>
                <div className="space-y-2">
                  <div className="flex h-14 items-center justify-center rounded-lg bg-[#e5dfd2]">
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <h3 className="text-xl font-bold">Mobilização</h3>
                  <p className="text-lg">
                    Pressionar o poder público por políticas efetivas de
                    proteção.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </SlideUp>
      </section>

      <section className="bg-foreground/85 py-10">
        <div className="container space-y-16">
          <div className="rounded-sm bg-[#EFECE6] px-16 py-12">
            <SlideUp>
              <h2 className="mb-9 text-5xl font-semibold">
                Ações de Prevenção e Atendimento
              </h2>

              <div className="flex flex-wrap gap-5 text-foreground/75">
                <SlideUp className="flex-1" delay={400}>
                  <div className="space-y-2">
                    <Image className="!mb-3 size-11" src={education} alt="" />
                    <h3 className="text-xl font-bold">Educação</h3>
                    <p className="text-lg">
                      Programas de formação em direitos humanos e cidadania.
                    </p>
                  </div>
                </SlideUp>

                <SlideUp className="flex-1" delay={440}>
                  <div className="space-y-2">
                    <Image className="!mb-3 size-11" src={assistance} alt="" />
                    <h3 className="text-xl font-bold">Assistência Social</h3>
                    <p className="text-lg">
                      Serviços de acolhimento, apoio psicossocial e reinserção
                      familiar.
                    </p>
                  </div>
                </SlideUp>

                <SlideUp className="flex-1" delay={480}>
                  <div className="space-y-2">
                    <Image className="!mb-3 size-11" src={justice} alt="" />
                    <h3 className="text-xl font-bold">Justiça</h3>
                    <p className="text-lg">
                      Ações judiciais e responsabilização dos agressores.
                    </p>
                  </div>
                </SlideUp>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      <section className="bg-foreground/85 py-16">
        <div className="container space-y-16">
          <div className="rounded-sm bg-[#EFECE6] px-16 py-12">
            <SlideUp>
              <h2 className="mb-9 text-5xl font-semibold">
                Proteção e Defesa dos Direitos
              </h2>

              <div className="flex justify-evenly gap-5">
                <SlideUp className="max-w-96" delay={400}>
                  <div className="text-center">
                    <span className="mb-3 block text-xl font-semibold">
                      Prevenção
                    </span>
                    <p className="text-lg">
                      Ações de educação, conscientização e fortalecimento de
                      famílias.
                    </p>
                  </div>
                </SlideUp>

                <SlideUp className="max-w-96" delay={440}>
                  <div className="text-center">
                    <span className="mb-3 block text-xl font-semibold">
                      Responsabilização
                    </span>
                    <p className="text-lg">
                      Investigação, julgamento e punição dos agressores.
                    </p>
                  </div>
                </SlideUp>
              </div>

              <div className="my-4 flex items-center">
                <div className="flex-1 border-b-2 border-[#cbc5b8ff]" />

                <div className="flex flex-col items-center">
                  <div className="h-16 w-0.5 bg-[#cbc5b8ff]" />
                  <span className="flex size-10 items-center justify-center rounded-sm bg-[#e5dfd2] text-xl font-semibold">
                    1
                  </span>
                  <div className="h-16 w-0.5" />
                </div>

                <div className="flex-1 border-b-2 border-[#cbc5b8ff]" />

                <div className="flex flex-col items-center">
                  <div className="h-16 w-0.5" />
                  <span className="flex size-10 items-center justify-center rounded-sm bg-[#e5dfd2] text-xl font-semibold">
                    2
                  </span>
                  <div className="h-16 w-0.5 bg-[#cbc5b8ff]" />
                </div>

                <div className="flex-1 border-b-2 border-[#cbc5b8ff]" />

                <div className="flex flex-col items-center">
                  <div className="h-16 w-0.5 bg-[#cbc5b8ff]" />
                  <span className="flex size-10 items-center justify-center rounded-sm bg-[#e5dfd2] text-xl font-semibold">
                    3
                  </span>
                  <div className="h-16 w-0.5" />
                </div>

                <div className="flex-1 border-b-2 border-[#cbc5b8ff]" />
              </div>

              <SlideUp className="mx-auto max-w-96" delay={480}>
                <div className="text-center">
                  <span className="mb-3 block text-xl font-semibold">
                    Atendimento
                  </span>
                  <p className="text-lg">
                    Acolhimento, apoio psicossocial e reinserção segura das
                    vítimas.
                  </p>
                </div>
              </SlideUp>
            </SlideUp>
          </div>
        </div>
      </section>
    </main>
  );
}
