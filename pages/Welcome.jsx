"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function AcademicWritingPage() {
  const { scrollY } = useScroll();

  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );

  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.4]);

  return (
    <>
      <div id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ scale: scaleText, y: yText }}
        >
          <button></button>
          <h1>The Role of Citations and References in Academic Writing</h1>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src="/assets/bacrgroundf.png"
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
      </div>
      <main id="welcome-content">
        <section>
          <p>
            Academic writing is essential for scholarly communication. It lets
            researchers, scholars, and students share their findings. They can
            also share their insights with the wider academic community.
            Citations and references are essential for the integrity and
            credibility of academic writing. They serve several critical
            functions. This article looks into how citations and references
            matter in academic writing. This text talks about their history,
            activities, types, formats, ethics, and the impact of technology on
            them. Understanding these elements helps writers improve their
            work&apos;s quality and credibility. This, in turn, enriches the
            ongoing dialogue in their respective fields.
          </p>
        </section>

        <section>
          <h2>Historical Context</h2>
          <p>
            Citations and references have a long and evolving history rooted in
            early scholarship practices. In old texts, people didn&apos;t always
            say where they got their information. It wasn&apos;t until the
            Renaissance that people started developing organized ways to show
            where they found their sources. The printing press made these
            practices more uniform, shaping our current citation styles.
            Citation styles such as APA, MLA, and Chicago have distinct rules
            and histories. The APA style was created by the American
            Psychological Association in the 1920s. Its purpose was to make
            scientific writing clear and consistent. The MLA style, made by the
            Modern Language Association, is often used in humanities. It
            emphasizes authorship and publication details. It&apos;s widely used
            for its attention to these details.
          </p>
        </section>

        <section id="advantages">
          <h2>The Function of Citations</h2>
          <p>
            Citations have various roles in academic writing. Each role
            contributes to the honesty and usefulness of scholarly work:
          </p>
          <ul>
            <li>
              <strong>Attribution and Credit:</strong> Citations are mainly used
              to give credit to the original authors. They&apos;re acknowledged
              for their work that influenced or inspired new research.
              Recognizing others&apos; work stops plagiarism and honors their
              intellectual rights. It acknowledges the input of fellow
              researchers.
            </li>
            <li>
              <strong>Research Validation:</strong> Citations provide evidence
              for a paper&apos;s claims. Authors can support their arguments by
              referencing relevant studies. This shows that their conclusions
              rely on established research. This validation is crucial for
              maintaining the credibility and reliability of academic work.
            </li>
            <li>
              <strong>Building on Previous Work:</strong> Academic writing
              accumulates over time. New research relies on what came before it.
              Citations connect past and present research. They help scholars
              build on others&apos; work, participate in ongoing debates, and
              push knowledge forward in their fields.
            </li>
            <li>
              <strong>Navigation Tool:</strong> Citations also serve as a
              navigational tool for readers. Authors help readers by giving
              specific references. This lets readers find where the information
              came from, read more on the topic, and check if the data cited is
              correct. This transparency enhances the reader&apos;s ability to
              engage critically with the text.
            </li>
          </ul>
        </section>

        <section>
          <h2>Types of Citations</h2>
          <p>
            In academic writing, various citation types have specific functions
            and formats. Each type serves a different purpose.
          </p>
          <ul>
            <li>
              <strong>In-text Citations:</strong> In-text citations are brief
              references within the body of a text that direct readers to the
              full citation in the reference list. They typically include the
              author&apos;s last name and the publication year (e.g., Smith,
              2020). These citations provide immediate context and allow readers
              to see the source of specific information or arguments.
            </li>
            <li>
              <strong>Footnotes and Endnotes:</strong> Footnotes and endnotes
              offer extra information or comments without interrupting the main
              text&apos;s flow. They&apos;re helpful for expanding on points
              without cluttering up the main body of the text. Footnotes appear
              at the bottom of the page, while endnotes are collected at the end
              of a chapter or document. They help in citing sources or adding
              extra details. These details might distract if put in the main
              text.
            </li>
            <li>
              <strong>Reference Lists and Bibliographies:</strong> Reference
              lists and bibliographies are comprehensive lists of all sources
              cited in a paper. A reference list has only the works you mention
              in your text. A bibliography might have more readings you looked
              at but didn&apos;t cite directly. Typically, these lists follow a
              certain citation style. They give all the publication details for
              each source.
            </li>
          </ul>
        </section>

        <section id="about">
          <h2>Common Citation Styles</h2>
          <p>
            Several citation styles are commonly used in academic writing, each
            with its own conventions and rules.
          </p>
          <ul>
            <li>
              <strong>APA Style:</strong> The APA style is widely used in the
              social sciences. It emphasizes the author&apos;s name and
              publication year, with a focus on the date of research as a marker
              of relevance and currency (e.g., Smith, 2020).
            </li>
            <li>
              <strong>MLA Style:</strong> The MLA style is commonly used in the
              humanities. This highlights the writer&apos;s name and the page
              number for finding the info. It shows the significance of
              particular parts in analyzing literature (like Smith 123).
            </li>
            <li>
              <strong>Chicago Style:</strong> The Chicago Manual of Style has
              two systems. One is like APA and uses author-date citations. The
              other uses footnotes or endnotes and includes a bibliography. This
              flexibility makes it suitable for a wide range of disciplines.
            </li>
          </ul>
          <p>
            Each citation style has its specific applications. APA is preferred
            in psychology and education, MLA in literature and the arts, and
            Chicago in history and some social sciences. Understanding when and
            where to use each style is crucial for proper academic writing.
          </p>
          <div>
            <img
              src="/assets/secondAi.png"
              alt="A city skyline touched by sunlight"
            />
            <img
              src="/assets/therdAi.png"
              alt="A city skyline touched by sunlight"
            />
          </div>
        </section>

        <section>
          <h2>The Impact of Technology</h2>
          <p>
            Technology has greatly changed how citations are done. Now, writers
            find it simpler to handle references and guarantee accuracy.
          </p>
          <ul>
            <li>
              <strong>AI tools with Citations and References:</strong>{" "}
              Customwriting offers an AI-powered tool. This tool, an
              <Link href="https://customwriting.com/ai-essay-writer">
                {" "}
                essay writer with citations and references
              </Link>
              , can generate unique content. It includes proper citations and
              references. This tool uses smart algorithms to format citations
              and correctly insert them into the text. Which saves time and
              lowers the chance of mistakes.
            </li>
            <li>
              <strong>Digital Citations:</strong> The rise of digital sources
              and online databases has transformed citation practices. Digital
              citations usually have DOIs (Digital Object Identifiers). DOIs are
              like permanent addresses for sources. They make sure references
              stay available for a long time.
            </li>
            <li>
              <strong>Automation and Accuracy:</strong> Reference management
              software and citation generators make creating and organising
              citations easy. They automate the process, saving time and effort.
              Users can use these tools to store and organize their references.
              This makes managing large volumes of sources easier.
            </li>
          </ul>
        </section>

        <section>
          <h2>Best Practices for Effective Citation</h2>
          <p>
            To ensure effective citation practices, writers should adhere to
            several best practices.
          </p>
          <ul>
            <li>
              <strong>Accurate Source Documentation:</strong> Documenting all
              sources accurately and thoroughly is crucial. Make sure to jot
              down important details like the author, title, and publication
              date when you read. This helps prevent missing information later
              on.
            </li>
            <li>
              <strong>Consistency and Clarity:</strong> Consistency in citation
              style is essential for clarity and readability. Writers must
              follow the rules of their preferred citation style. They should
              make sure all citations look the same in their writing. Uniform
              formatting is crucial.
            </li>
            <li>
              <strong>Regular Updates and Learning:</strong> Citation styles and
              rules can change over time. Writers should stay informed about
              updates to citation guidelines and be willing to learn and adapt
              to new practices. This ongoing learning ensures that their work
              remains current and accurate.
            </li>
          </ul>
        </section>

        <section>
          <h2>Ethical Considerations</h2>
          <p>
            Citing sources accurately and comprehensively is an ethical
            imperative in academic writing.
          </p>
          <ul>
            <li>
              <strong>Plagiarism Prevention:</strong> Using proper citation is
              crucial. It helps avoid plagiarism, which is when you use someone
              else&apos;s work without giving credit. Copying someone
              else&apos;s work hurts the honesty of academic efforts. It can
              lead to serious trouble for both the writer and the school.
            </li>
            <li>
              <strong>Academic Integrity:</strong> Accurate citations reflect a
              writer&apos;s commitment to academic honesty and integrity. They
              respect what the original authors contributed. They also make sure
              the research process is clear for everyone.
            </li>
            <li>
              <strong>Issues of Misattribution:</strong> Using incorrect or
              misleading citations can cause problems. These problems include
              wrongly giving credit or citing work that doesn&apos;t back up the
              claims. This can damage the writer&apos;s credibility and
              misinform readers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Conclusion</h2>
          <div style={{ marginBottom: "30px" }}>
            <img
              src="/assets/fourAi.png"
              alt="A city skyline touched by sunlight"
            />
            <img
              src="/assets/fiveAi.png"
              alt="A city skyline touched by sunlight"
            />
          </div>
          <p>
            In academic writing, citations and references are crucial. They
            enhance the integrity, credibility, and scholarly value of research.
            Without them, the work lacks reliability and academic weight.
            Citations play a crucial role in academia. They give credit where
            it&apos;s due and validate the research. By referencing previous
            work, they enable progress. Citations also help readers navigate
            through the sea of information. In essence, they are indispensable
            in scholarly circles. Technology, like AI tools and digital citation
            management, has made citing sources easier and more precise.
            Academic citation practices should always be guided by ethical
            considerations and best practices. This ensures the maintenance of
            academic integrity. Learning to cite properly is crucial for doing
            well in academics and pushing knowledge forward in every study area.
            It&apos;s a skill that&apos;s indispensable for success in research
            and scholarship. To explore more about referencing and citations,
            you can check out the
            <Link
              style={{ margin: "0px 5px" }}
              href="https://institute-academic-development.ed.ac.uk/study-hub/learning-resources/referencing-and-citations"
            >
              Study Hub
            </Link>
            at The University of Edinburgh&apos;s Institute for Academic
            Development. Interested readers are welcome to visit for additional
            resources.
          </p>
        </section>
      </main>
    </>
  );
}
