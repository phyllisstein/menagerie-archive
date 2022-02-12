import { ReactElement } from 'react'

import { Container, Content, Sidebar } from './aoc-styles'

import { P } from 'components/markup'

export function AOC (): ReactElement {
  return (
    <Container>
      <Content>
        <P>
          Even her haters call her a “generational talent,” a disparagement
          candy-wrapped as a compliment, the implication being that the
          astonishing rise of Alexandria Ocasio-Cortez was somehow encoded in
          her DNA. Frame a thing as expected and it can be discounted. But
          rewind five years and it becomes clear just how unprecedented her rise
          has been. “Women like me aren’t supposed to run for office,” she said
          at the start of her journey to Washington. She was only stating facts.
          Months before AOC became the new face of the Democratic Party, she was
          working in a bar where she was expected to look “hot,” riding the 6
          train, fretting about health insurance, and not really sure what she
          wanted to do with her life.
        </P>
        <P>
          Her victory on June 26, 2018, over her mainstream Democratic opponent,
          Joe Crowley, was a marker delineating the moment after which American
          politics would never be the same. It established AOC’s prodigious
          political gifts while showcasing a new sort of Democratic candidate
          and a new way of recruiting them. Barack Obama, previous holder of the
          “generational talent” title, may have resembled Ocasio-Cortez in some
          ways. Brown-skinned, good looking, with his own misadventures in the
          postcollegiate wilderness, he challenged political convention even as
          he titillated its guardians. But he had a résumé — the first Black
          president of the Harvard Law Review, constitutional-law professor at
          the University of Chicago — that the Democratic-consultant class could
          easily recognize and safely admire. The Establishment didn’t know what
          to make of AOC. As she put it in an interview then, “If a spaceship
          landed in your backyard, it’s like, ‘What the fuck is that? Is it
          going to hurt me?’ ”
        </P>
        <P>
          Latina and working class, Ocasio-Cortez was demographically distinct
          from her new colleagues in Congress. She also represented a new
          generation. With the skills of a social-media influencer,
          Ocasio-Cortez helped bring the millennials and their younger siblings
          into battle. She was cool, gorgeous, a digital polyglot — she
          streamed, she posted, she tweeted — but she also loved literature,
          photography, and fashion. Her leftist mission, her savantlike
          communication skills, and her moral ferocity propelled her rise, but
          what people loved about her, at the beginning, was that she was
          regular. Not, like Crowley and other career pols, ostentatiously
          folksy. Ocasio-Cortez was really regular: vulnerable, fun, someone you
          might actually know, like your friend’s roommate.
        </P>
      </Content>
      <Sidebar />
    </Container>
  )
}
