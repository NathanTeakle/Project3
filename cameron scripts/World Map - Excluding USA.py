#import required libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns 
plt.style.use('fivethirtyeight')
import plotly.express as px

#read the csv file
file_path = r'C:\Users\CDiFa\OneDrive\Uni - Data Analytics\Project 3\data.csv'
df = pd.read_csv(file_path)
print(df.head())

# Filter out rows with 'United States' as nationality
df_filtered = df[df['Nationality'] != 'United States']

# Group by nationality and count occurrences
nationality_counts = df_filtered['Nationality'].value_counts().reset_index()
nationality_counts.columns = ['Nationality', 'Occurrences']

# Use plotly.express to create a choropleth map
fig = px.choropleth(
    nationality_counts,
    locations="Nationality",
    locationmode='country names',
    color='Occurrences',
    hover_name="Nationality",
    title='Number of Occurrences of Nationality on Map (Excluding United States)',
    projection='natural earth'
)

fig.show()
