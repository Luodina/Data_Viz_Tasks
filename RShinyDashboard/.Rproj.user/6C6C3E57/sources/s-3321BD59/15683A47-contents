library(shiny)
library(shinydashboard)
library(ggplot2)
ui <- dashboardPage(
    dashboardHeader(title = "Basic dashboard", titleWidth = 700),
    dashboardSidebar(disable = TRUE),
    dashboardBody(
        fluidRow(
                box(title = "1", width=4,plotOutput("doughnutChart", height = 250)),
                box(title = "2", width=4,plotOutput("barChart", height = 250)),
                box(title = "3", width=4,plotOutput("radarChart", height = 250))
        ),
        fluidRow(
            box(title = "4", width=8,plotOutput("lineChart", height = 250)),
            box(title = "5",width=4,plotOutput("pieChart", height = 250))
        ),
        # Also add some custom CSS to make the title background area the same
        # color as the rest of the header.
        tags$head(tags$style(HTML('
        .skin-blue .main-header .logo {
          background-color: #3c8dbc;
        }
        .skin-blue .main-header .logo:hover {
          background-color: #3c8dbc;
        }
      ')))
    )
)

server <- function(input, output) {
    # Load Titanic data for analysis. Open in spreadsheet view.
    titanic <- read.csv("titanic.csv", stringsAsFactors = FALSE)
    # Set up factors.
    titanic$Pclass <- as.factor(titanic$Pclass)
    titanic$Survived <- as.factor(titanic$Survived)
    titanic$Sex <- as.factor(titanic$Sex)
    titanic$Embarked <- as.factor(titanic$Embarked)

    
    output$barChart <- renderPlot(
        ggplot(data = titanic, aes(x = Survived)) + 
            geom_bar()
    )
    
    output$doughnutChart <- renderPlot(
        ggplot(data = titanic, aes(x = Survived)) + 
            geom_bar()
            #coord_polar("y") +
            #geom_text(aes(y=Sex,label = Survived))+
            #theme_void()
    )
    
    output$radarChart <- renderPlot(
        ggplot(data = titanic, aes(x = Survived)) + 
            geom_bar()
    )
    
    output$lineChart <- renderPlot(
        ggplot(data = titanic, aes(x=Pclass, y=Age, group=Survived)) +
            geom_line()
    )
    
    output$pieChart <- renderPlot(
        ggplot(data = titanic, aes(x = Survived)) + 
            geom_bar()
    )
    
}

shinyApp(ui, server)
