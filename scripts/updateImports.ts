import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isAbsolute(value: string): boolean {
    const layers = [
        '1_app',
        '2_pages',
        '3_widgets',
        '4_features',
        '5_entities',
        '6_shared',
    ]
    return layers.some((layer) => value.startsWith(layer))
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations()
    importDeclarations.forEach((importValue) => {
        const value = importValue.getModuleSpecifierValue()
        if (isAbsolute(value)) {
            importValue.setModuleSpecifier('@/' + value)
        }
    })
})

void project.save()
