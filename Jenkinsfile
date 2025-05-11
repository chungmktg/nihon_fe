pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Thêm các lệnh build dự án của bạn
                sh 'mvn clean install' // Ví dụ với Maven
                // hoặc npm, gradle, ...
                // test 
            }
        }
        
        stage('Test') {
            steps {
                // Thêm các lệnh test
                sh 'mvn test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Thêm các bước triển khai
                echo 'Deploying...'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}