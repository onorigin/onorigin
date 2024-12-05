import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import imageOffice from '@/images/output.jpg'
// import imageCogs from '@/images/floating-cogs2.svg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Recent projects
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-16 gap-y-10 lg:grid-cols-2"
          >
            <div>
              <div className='text-white text-3xl font-semibold'>Golden Ticket London</div>
              <div className='text-white text-xl font-semibold'>An application to house high profile clients 
                in the entertainment industry in exclusive private residences across the globe during film productions.
              </div>
              <a href="https://goldenticketlondon.co.uk" target="_blank" className='mt-6 block text-white text-sm font-semibold hover:underline hover:underline-offset-3'>goldenticketlondon.co.uk</a>
            </div>

            <div>
              <div className='text-white text-3xl font-semibold'>MSE (London)</div>
              <div className='text-white text-xl font-semibold'>
                A bespoke private client portal for the onboarding and management of music artists and industry professionals. 
              </div>
              {/* <a href="/" className='mt-6 block text-white text-sm font-semibold hover:underline hover:underline-offset-3'></a> */}
            </div>

            {/* {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))} */}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We specialise in custom solutions to your business needs."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {/* We pride ourselves on delivering high quality, bespoke solutions to specific business needs. */}
          We enjoy working with clients who have a clear vision of what they want to achieve, and in finding
          the best way to deliver high quality, bespoke solutions to enable it.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageOffice}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
          <ListItem title="Application development">
              We have a proven track record of delivering high quality, bespoke
              applications in situations where confidentiality and discretion are
              paramount. We&apos;ve built a reputation in the creative industries such that our applications are
              used everyday by people you will know.
            </ListItem>
            <ListItem title="Process">
              Our clients come to us with a requirement and we help them to understand it and solve it. We have 
              a wealth of experience in understanding workflow and can help you to streamline your processes.
            </ListItem>

            <ListItem title="Management">
              Most of our projects are critical to our clients&apos; businesses. We understand the importance of that, and
              as such, take the management of these projects in production very seriously. We pride ourselves on making sure
              our systems are always secure and operational.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Software solutions for the creative industry.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We specialise in bespoke applications where confidentiality and 
            discretion are paramount. With a focus on the creative industry, we have
            gained a reputation for delivering.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at OnOrigin are a pleasure to work with. They  
        always seem to have solutions for what we need.
        Our clients need our discretion and confidentiality is important to us. We wouldn&apos;t trust anyone
        else with our business.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
