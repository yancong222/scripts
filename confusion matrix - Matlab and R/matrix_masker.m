% authors: Devin McAuley, Toni Smith, Yan Cong

% Change the folder name if data to be analyzed is in a different folder
% (folder must contain only participant data files)
datafiles = dir('DataFiles');
nfiles = length(datafiles);

nblocks   = 16; 
ntrials   = 40;
n_colors  = 4;
n_numbers = 8;

res_masker = double.empty;

% Iterate through each file in folder
% If thrown an error using load on line 22, might have to change the
% starting number of the for loop (weird matlab idiosyncracy re:iterating through files in a folder)
for i = 4:nfiles
    
    filename = datafiles(i).name;
    subjname = filename(1:(length(filename) - 8));
    sheetname = strcat(subjname, '_maskerCM');
    
    subj = load(filename);

    % Calls spin_analyze function
    res = spin_analyze_masker041420(subj,nblocks,ntrials,n_colors);

    res_masker = res;

    xlswrite(sheetname, res_masker);

end
