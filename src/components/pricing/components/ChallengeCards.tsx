import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import StaggerContainer, { StaggerItem } from '../../animations/StaggerContainer';
import { challenges } from '../data/challenges';

interface ChallengeCardsProps {
    filteredChallenges: typeof challenges;
    selectedChallenge: string;
    setSelectedChallenge: (title: string) => void;
    isPrime: boolean;
}

export default function ChallengeCards({ filteredChallenges, selectedChallenge, setSelectedChallenge, isPrime }: ChallengeCardsProps) {
    return (
        <StaggerContainer
            key={isPrime ? "prime-cards" : "lite-cards"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
            {filteredChallenges.map((challenge) => (
                <StaggerItem key={challenge.title}>
                    <div
                        onClick={() => setSelectedChallenge(challenge.title)}
                        className={`relative p-8 rounded-2xl border transition-all cursor-pointer group min-h-[160px] flex flex-col justify-between h-full
                    ${challenge.isSpecial
                                ? 'bg-[linear-gradient(180deg,rgba(226,27,50,0.37)_0%,rgba(226,27,50,0.1)_100%)] border-[#E21B32]/30 hover:border-[#E21B32]/60'
                                : (challenge.title === 'Two Step Challenge' || challenge.title === 'Try Shark Funding')
                                    ? 'bg-[linear-gradient(180deg,rgba(34,67,139,0.84)_0%,rgba(34,67,139,0)_100%)] border-[#22438B]/30 hover:border-[#22438B]/60'
                                    : selectedChallenge === challenge.title
                                        ? 'bg-[#1e2342] border-blue-500/50 shadow-[0_0_30px_rgba(30,35,66,0.5)]'
                                        : 'bg-[#151932] border-white/5 hover:border-white/10'
                            }
                        `}
                    >
                        {challenge.badge && (
                            <div className={`absolute -top-7 left-8 px-4 py-1 rounded-t-xl text-xs font-bold uppercase tracking-wider ${challenge.badgeColor}`}>
                                {challenge.badge}
                            </div>
                        )}
                        <h3 className="text-lg xl:text-[20px] font-bold text-white mt-2 mb-2 whitespace-nowrap">{challenge.title}</h3>
                        <div className="flex flex-col gap-2">
                            {challenge.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/60 text-[14px] font-medium">
                                    <CheckCircleIcon className={`w-4 h-4 ${challenge.isSpecial ? 'text-[#ff3b3b]' : 'text-white'}`} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    );
}
