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
          <div className="space-y-8">
            <h1 className="text-6xl font-semibold">
              Proteção e Defesa dos Direitos das Crianças
            </h1>
            <p className="text-lg">
              Juntos, podemos acabar com todas as formas de violência contra
              crianças e garantir um futuro mais seguro e justo para elas.
            </p>
            <div className="flex gap-2">
              <Button>Denunciar Violência</Button>
              <Button variant="outline">Saiba mais</Button>
            </div>
          </div>
          <div>
            <Image className="max-w-sm rounded-sm" src={kidsImg} alt="" />
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container flex items-center gap-16">
          <Image className="max-w-60 rounded-sm" src={kidsRunningImg} alt="" />
          <div className="space-y-8">
            <h2 className="text-5xl font-semibold">
              Definindo os Tipos de Violência
            </h2>

            <div className="flex flex-wrap gap-6">
              <ViolenceTypes
                number={1}
                title="Abuso"
                description="Maus-tratos físicos, emocionais, negligência e exploração sexual."
              />

              <ViolenceTypes
                number={2}
                title="Exploração"
                description="Trabalho infantil, mendicância, pornografia e tráfico."
              />

              <ViolenceTypes
                number={3}
                className="flex-auto"
                title="Tráfico"
                description="Aliciamento, transporte e transferência de crianças para fins de exploração."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20">
        <div className="container space-y-16 text-white">
          <h2 className="text-5xl font-semibold">
            Fatores de Risco e Vulnerabilidade
          </h2>

          <div className="flex flex-wrap gap-5">
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold">Pobreza</h3>
              <p className="text-lg">
                Famílias em situação de vulnerabilidade econômica estão mais
                expostas à violência.
              </p>
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold">Violência Doméstica</h3>
              <p className="text-lg">
                Crianças que vivenciam violência em casa têm maior risco de
                serem vítimas.
              </p>
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-bold">Discriminação</h3>
              <p className="text-lg">
                Crianças marginalizadas por motivos de raça, etnia, gênero ou
                deficiência sofrem mais violência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-16">
          <h2 className="text-5xl font-semibold">Impactos da Violência</h2>

          <Summary trigger="Efeitos devastadores na saúde física e mental">
            <p>
              A violência pode causar traumas, problemas de comportamento, baixo
              rendimento escolar e dificuldades de relacionamento.
            </p>
          </Summary>
        </div>
      </section>

      <section className="pb-6 pt-1">
        <div className="container flex items-center gap-16">
          <Image className="max-w-sm rounded-sm" src={kidsLearning} alt="" />

          <div className="space-y-8">
            <h2 className="text-5xl font-semibold">Legislação de Proteção</h2>

            <div className="flex flex-wrap gap-6">
              <LegislationItem
                title="Estatuto da Criança e do Adolescente"
                description="Lei que garante os direitos fundamentais e a proteção integral de crianças e adolescentes."
              />

              <LegislationItem
                title="Convenção sobre os Direitos da Criança"
                description="Tratado internacional que estabelece princípios universais de proteção à infância."
              />

              <LegislationItem
                className="flex-auto"
                title="Plano Nacional de Enfrentamento"
                description="Política pública para coordenar ações de prevenção e atendimento às vítimas."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-protest bg-center bg-no-repeat py-20">
        <div className="container space-y-16">
          <h2 className="text-5xl font-semibold">Papel da Sociedade Civil</h2>

          <div className="flex flex-wrap gap-5 text-foreground/75">
            <div className="flex-1 space-y-2">
              <div className="flex h-14 items-center justify-center rounded-lg bg-[#e5dfd2]">
                <p className="text-2xl font-bold">1</p>
              </div>
              <h3 className="text-xl font-bold">Conscientização</h3>
              <p className="text-lg">
                Campanhas e ações de sensibilização sobre o tema.
              </p>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex h-14 items-center justify-center rounded-lg bg-[#e5dfd2]">
                <p className="text-2xl font-bold">2</p>
              </div>
              <h3 className="text-xl font-bold">Denúncia</h3>
              <p className="text-lg">
                Denunciar casos de violência às autoridades competentes.
              </p>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex h-14 items-center justify-center rounded-lg bg-[#e5dfd2]">
                <p className="text-2xl font-bold">3</p>
              </div>
              <h3 className="text-xl font-bold">Mobilização</h3>
              <p className="text-lg">
                Pressionar o poder público por políticas efetivas de proteção.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground/85 py-28">
        <div className="container space-y-16">
          <div className="rounded-sm bg-[#EFECE6] px-16 py-12">
            <h2 className="mb-9 text-5xl font-semibold">
              Ações de Prevenção e Atendimento
            </h2>

            <div className="flex flex-wrap gap-5 text-foreground/75">
              <div className="flex-1 space-y-2">
                <Image className="size-11" src={education} alt="" />
                <h3 className="text-xl font-bold">Educação</h3>
                <p className="text-lg">
                  Programas de formação em direitos humanos e cidadania.
                </p>
              </div>

              <div className="flex-1 space-y-2">
                <Image className="size-11" src={assistance} alt="" />
                <h3 className="text-xl font-bold">Assistência Social</h3>
                <p className="text-lg">
                  Serviços de acolhimento, apoio psicossocial e reinserção
                  familiar.
                </p>
              </div>

              <div className="flex-1 space-y-2">
                <Image className="size-11" src={justice} alt="" />
                <h3 className="text-xl font-bold">Justiça</h3>
                <p className="text-lg">
                  Ações judiciais e responsabilização dos agressores.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container space-y-16">
          <div></div>
        </div>
      </section>
    </main>
  );
}
