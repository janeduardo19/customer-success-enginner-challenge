import {FunctionComponent, ReactElement, Suspense} from 'react';
import {Personalization, Slot, useEvaluation} from '@croct/plug-react';
import './style.css';
import {SlotContent} from '@croct/plug/fetch';

type SlotProps = SlotContent<'home-banner'> & {
    loading?: boolean,
};

const defaultContent: SlotProps = {
    title: 'Croct Banner',
    subtitle: 'I am default.',
    cta: {
        label: 'Discover how',
        link: 'https://croct.link/demo',
    },
};

const developerContent: SlotProps = {
    title: 'Croct Banner',
    subtitle: 'I am developer.',
    cta: {
        label: 'Discover how',
        link: 'https://croct.link/demo',
    },
};
const marketerContent: SlotProps = {
    title: 'Croct Banner',
    subtitle: 'I am a marketer.',
    cta: {
        label: 'Discover how',
        link: 'https://croct.link/demo',
    },
};
const growthHackerContent: SlotProps = {
    title: 'Croct Banner',
    subtitle: 'I am a hacker.',
    cta: {
        label: 'Discover how',
        link: 'https://croct.link/demo',
    },
};

const initialContent: SlotProps = {
    ...defaultContent,
    loading: true,
};

type HomeBannerProps = {
    cacheKey?: string,
};

/*const isMarketer = useEvaluation<boolean>("user's persona is not 'marketer'")
const isDeveloper = useEvaluation<boolean>("user's persona is not 'developer'")
const isGrowthHacker = useEvaluation<boolean>("user's persona is not 'growth-hacker'")*/

const HomeBanner: FunctionComponent<HomeBannerProps> = ({cacheKey}): ReactElement => (
    <Suspense fallback="✨ Personalizing...">
        <Personalization expression="user's persona is not 'developer'" initial={false}>
            {(isDeveloper: boolean) => isDeveloper
                ? <Slot id="home-banner" initial={initialContent} fallback={defaultContent} cacheKey={cacheKey}>
                        {({loading, title, subtitle, cta}: SlotProps) => (
                            <div className={`hero${loading ? ' loading' : ''}`}>
                                <h1>{title}</h1>
                                <p className="subtitle">
                                    {subtitle}
                                </p>
                                <a href={cta.link} className="cta">{cta.label}</a>
                            </div>
                        )}
                    </Slot>
                : <Slot id="home-banner" initial={initialContent} fallback={developerContent} cacheKey={cacheKey}>
                        {({loading, title, subtitle, cta}: SlotProps) => (
                            <div className={`hero${loading ? ' loading' : ''}`}>
                                <h1>{title}</h1>
                                <p className="subtitle">
                                    {subtitle}
                                </p>
                                <a href={cta.link} className="cta">{cta.label}</a>
                            </div>
                        )}
                    </Slot>
            }
        </Personalization>
        <Personalization expression="user's persona is not 'marketer'" initial={false}>
            {(isMarketer: boolean) => isMarketer
                ? <Slot id="home-banner" initial={initialContent} fallback={defaultContent} cacheKey={cacheKey}>
                        {({loading, title, subtitle, cta}: SlotProps) => (
                            <div className={`hero${loading ? ' loading' : ''}`}>
                                <h1>{title}</h1>
                                <p className="subtitle">
                                    {subtitle}
                                </p>
                                <a href={cta.link} className="cta">{cta.label}</a>
                            </div>
                        )}
                    </Slot>
                : <Slot id="home-banner" initial={initialContent} fallback={marketerContent} cacheKey={cacheKey}>
                        {({loading, title, subtitle, cta}: SlotProps) => (
                            <div className={`hero${loading ? ' loading' : ''}`}>
                                <h1>{title}</h1>
                                <p className="subtitle">
                                    {subtitle}
                                </p>
                                <a href={cta.link} className="cta">{cta.label}</a>
                            </div>
                        )}
                    </Slot>
            }
        </Personalization>
        <Personalization expression="user's persona is not 'growth-hacker'" initial={false}>
            {(isGrowthHacker: boolean) => isGrowthHacker
                ? <Slot id="home-banner" initial={initialContent} fallback={defaultContent} cacheKey={cacheKey}>
                        {({loading, title, subtitle, cta}: SlotProps) => (
                            <div className={`hero${loading ? ' loading' : ''}`}>
                                <h1>{title}</h1>
                                <p className="subtitle">
                                    {subtitle}
                                </p>
                                <a href={cta.link} className="cta">{cta.label}</a>
                            </div>
                        )}
                    </Slot>
                : <Slot id="home-banner" initial={initialContent} fallback={growthHackerContent} cacheKey={cacheKey}>
                        {({loading, title, subtitle, cta}: SlotProps) => (
                            <div className={`hero${loading ? ' loading' : ''}`}>
                                <h1>{title}</h1>
                                <p className="subtitle">
                                    {subtitle}
                                </p>
                                <a href={cta.link} className="cta">{cta.label}</a>
                            </div>
                        )}
                    </Slot>
            }
        </Personalization>
        

    </Suspense>
    
);

export default HomeBanner;
