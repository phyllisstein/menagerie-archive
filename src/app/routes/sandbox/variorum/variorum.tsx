import { Graf } from 'app/components/markup'
import { Variorum } from 'app/components/variorum'
import { ReactElement } from 'react'
import { Original, Replacement } from './variorum-styles'

export function VariorumSandboxRoute (): ReactElement {
  return (
    <div style={{ margin: '1.778rem auto', width: '56.2%' }}>
      <Variorum>
        <Graf>
          ”And how did Lady Brandon describe this wonderful young man? I know
          she goes in for giving a rapid <em>précis</em> of all her guests. I
          remember her bringing me up to a truculent and red-faced old gentleman
          covered all over with <Original>orders and ribbons</Original>
          <Replacement>Stars and Garters</Replacement>, and hissing into my ear,
          in a tragic whisper which must have been perfectly audible to
          everybody in the room,
          <Replacement>the most astounding details</Replacement>
          <Original>
            something like ‘Sir Humpty Dumpty—you know—Afghan Frontier—Russian
            intrigues: very successful man—wife killed by an elephant—quite
            inconsolable—wants to marry a beautiful American widow—everybody
            does nowadays—hates Mr. Gladstone—but very much intereslated in
            beetles—ask him what he thinks of Schouvaloff.’
          </Original>
          I simply fled. I like to find out people for myself. But poor Lady
          Brandon treats her guests exactly as an auctioneer treats his goods.
          She either explains them entirely away, or tells one everything about
          them except what one wants to know.”
        </Graf>
      </Variorum>
    </div>
  )
}
