# Main File for Flask project

#1. get the data

#2. clean the data 

#3. create a model

#4. export model as api

from sklearn import datasets
import xgboost as xgb

iris = datasets.load_iris()
dtrain = xgb.DMatrix(iris.data, label=iris.target)
bst = xgb.train({}, dtrain, 20)

bst.save_model('model.bst')
