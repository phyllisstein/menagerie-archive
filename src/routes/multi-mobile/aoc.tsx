import { ReactElement } from 'react'

import { Container, Content, Sidebar } from './aoc-styles'

import { P } from 'components/markup'

export function AOC (): ReactElement {
  return (
    <Container>
      <Content>
        <P>
          Ocasio-Cortez, like so many other people of color in her generation,
          had been seduced by the promise that higher education would open up
          opportunities.
        </P>
        <P>
          But life out of college was a shock, as it was for millions of other
          millennials entering the postrecession job market. Her father, Sergio,
          who had died when she was a sophomore at Boston University, had told
          her she was special, destined for greatness, capable through
          intelligence and grit of attaining her dreams, and her education had
          reinforced that notion. But upon graduating in 2011, she saw that it
          didn’t matter how smart she was, what she knew, how ambitious or
          imaginative her ideas were. It didn’t matter that she’d won science
          prizes; been chosen to give speeches; immersed herself in economics,
          music, and literature; and graduated cum laude. Sandy, as she was
          sometimes known back then, was a petite young Puerto Rican woman with
          bills to pay. She moved into an apartment in the Parkchester
          development in the Bronx that had belonged to her father, with $25,000
          in student loans and no health insurance. Up in Yorktown Heights in
          Westchester, her family relied on food stamps.
        </P>
        <P>
          Throughout high school and college, she had attended the National
          Hispanic Institute, a youth leadership organization, and now she was
          given a paid fellowship there, helping the administrators develop
          high-school curricula, traveling the country to set up and lead summer
          programs, and receiving a grant to try to launch a series of
          children’s books with Latino characters. She wanted to share the
          pleasure of reading with young kids in the barrio, who, she thought,
          might more easily take to it if they saw themselves reflected in the
          books. But she wasn’t able to get the series off the ground. At around
          the same time, she rented space at a small-business incubator in the
          Bronx. People who knew her then remember her working on a tool to help
          educators track kids’ emotional and mental health. She took meetings
          and reached out through her networks, but that project was going
          nowhere as well, and she became extremely discouraged.
        </P>
      </Content>
      <Sidebar />
    </Container>
  )
}
