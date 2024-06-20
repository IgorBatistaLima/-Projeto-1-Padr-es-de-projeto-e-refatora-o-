# -Projeto-1-Padr-es-de-projeto-e-refatora-o-
Com base no sistema abaixo:    
https://github.com/watinha/es46a-2023-2/tree/strategy/01-design-patterns-template-strategy  

Aplicar um padrão de projeto criacional, estrutural e um comportamental. Justifique o porque das escolhas em documentação que aponte, ainda, tres refatorações (use os princípios SOLID). 


# Documentação de Refatoração e Padrões de Projeto
Padrões de Projeto Aplicados
Padrão Criacional: Singleton
O padrão Singleton foi aplicado à classe CitiesReporter. Este padrão garante que apenas uma instância dessa classe seja criada, fornecendo um ponto de acesso global a ela.

Justificativa: A classe CitiesReporter é responsável por gerar relatórios de cidades. Em muitos casos, queremos garantir que apenas uma instância esteja manipulando os dados para evitar inconsistências.

# Padrão Estrutural: Adapter
O padrão Adapter pode ser aplicado para permitir que diferentes formatadores (como FormaterHTML e FormaterTXT) trabalhem com a classe CitiesReporter sem alterar suas interfaces.

Justificativa: A classe CitiesReporter pode precisar trabalhar com diferentes tipos de formatadores. Usar um Adapter permite que a classe CitiesReporter interaja com diferentes formatadores sem conhecer as diferenças entre suas interfaces.

# Padrão Comportamental: Strategy
O padrão Strategy já está sendo aplicado com FormaterHTML e FormaterTXT como estratégias. Este padrão permite que o algoritmo de formatação seja selecionado em tempo de execução.

Justificativa: A classe CitiesReporter precisa formatar os dados de cidades em diferentes formatos (HTML, TXT). O padrão Strategy permite que a classe CitiesReporter alterne facilmente entre diferentes algoritmos de formatação.

# Refatorações SOLID
Princípio da Responsabilidade Única (SRP)
Cada classe deve ter apenas uma responsabilidade. Se a classe CitiesReporter estiver fazendo mais do que apenas relatar as cidades, você pode querer dividir suas responsabilidades em classes separadas.

Princípio Aberto-Fechado (OCP)
As entidades de software devem estar abertas para extensão, mas fechadas para modificação. Se você precisar adicionar mais formatadores no futuro, deve ser capaz de fazê-lo sem modificar o código existente. Isso é alcançado com o uso do padrão Strategy.

Princípio da Substituição de Liskov (LSP)
As subclasses devem ser substituíveis por suas classes base. Se você tiver subclasses de CitiesReporter, elas devem ser capazes de ser usadas onde quer que CitiesReporter seja usado.
