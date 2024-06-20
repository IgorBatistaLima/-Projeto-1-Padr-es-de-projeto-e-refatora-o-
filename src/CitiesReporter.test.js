import CitiesReporter from './CitiesReporter';
import FormaterHTML from './FormaterHTML';
import FormaterTXT from './FormaterTXT';

describe('CitiesReporter', () => {
    let reporter;
    const filename = './data/cidades-2.json';

    beforeEach(() => {
        reporter = new CitiesReporter({
            formaterStrategy: null
        });
    });

    test('should format as HTML when strategy is FormaterHTML', () => {
        reporter.formaterStrategy = new FormaterHTML();
        const output = reporter.report(filename);
        expect(output).not.toBeNull();
    });

    test('should format as TXT when strategy is FormaterTXT', () => {
        reporter.formaterStrategy = new FormaterTXT();
        const output = reporter.report(filename);
        expect(output).not.toBeNull();
    });
});