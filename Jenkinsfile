pipeline {
  agent any
  
  tools {nodejs "node"}
  
  stages {
      
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Build') {
      steps { sh 'npm run build-prod' }
    }
    
    stage ('Deploy') {
        steps {
    ftpPublisher alwaysPublishFromMaster: true,
                 continueOnError: false,
                 failOnError: false,
                 masterNodeName: '',
                 paramPublish: null,
                 publishers: [[configName: 'eattogethertest', transfers: [[asciiMode: false, cleanRemote: true, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'dist/eat-together-angular', sourceFiles: 'dist/eat-together-angular/,dist/eat-together-angular/']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false]]}

  }
}
}