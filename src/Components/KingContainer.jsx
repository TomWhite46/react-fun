import Kings from './Kings.json';
import King from './King';

function KingContainer() {
    console.log("KINGS: ", Kings);
    return (
        <>
            {
                // Kings.map(({nm, cty, hse, yrs}) => <King nm={nm} cty={cty} hse={hse} yrs={yrs}/>)
                // Kings.map(({nm, cty, hse, yrs}) => <King nm={nm} cty={cty} hse={hse} yrs={yrs}/>)
                Kings.map(king=> <King key={king.yrs} {...king}/>)
            }
        </>
    );
};

export default KingContainer;