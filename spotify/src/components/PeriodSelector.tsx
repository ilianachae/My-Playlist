import React from 'react';

interface PeriodSelectorProps {
    setPeriod: (period: string) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ setPeriod }) => {
    return (
        <div>
            <button onClick={() => setPeriod('short_term')}>Last Month</button>
            <button onClick={() => setPeriod('medium_term')}>Last 6 Months</button>
            <button onClick={() => setPeriod('long_term')}>Last Year</button>
        </div>
    );
};

export default PeriodSelector;
