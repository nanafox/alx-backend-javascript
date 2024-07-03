interface MajorMinorCommons {
  credits: number;
  brand: string;
}

interface MajorCredits extends MajorMinorCommons {}

interface MinorCredits extends MajorMinorCommons {}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Minor' };
}

// console.log(sumMajorCredits({ credits: 10, brand: 'Major' }, { credits: 20, brand: 'Major' }));
